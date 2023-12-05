import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Grade} from '../../domain/entities/Grade';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';


@Injectable({
 providedIn: 'root'
})
export class NotasFirebaseService {


 colecaoNotas: AngularFirestoreCollection<Grade>;
 NOME_COLECAO = 'notas';


 constructor(private afs: AngularFirestore) {
   this.colecaoNotas = afs.collection(this.NOME_COLECAO);
 }


 listar(): Observable<Grade[]> {
   // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
   return this.colecaoNotas.valueChanges({idField: 'id'});
 }


 inserir(grade: Grade): Observable<Object> {
   // removendo id pois ele está undefined, já que um novo usuário
   delete grade.id;
   // Object.assign({}, usuario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
   // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
   return from(this.colecaoNotas.add(Object.assign({}, grade)));
 }


 apagar(id: string): Observable<void> {
   return from(this.colecaoNotas.doc(id).delete());
 }


 pesquisarPorId(id: string): Observable<Grade> {
   // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
   //  para o tipo usuário
   return this.colecaoNotas.doc(id).get().pipe(map(document => new Grade(document.id, document.data())));
 }


 atualizar(grade: Grade): Observable<void> {
const id = grade.id;
// removendo id pois não vamos guardar nos dados do documento, mas sim usar apenas como id para recuperar o documento
delete grade.id;
return from(this.colecaoNotas.doc(id).update(Object.assign({}, grade)));


 }

}
