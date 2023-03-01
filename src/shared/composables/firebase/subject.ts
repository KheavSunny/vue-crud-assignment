import { collection, deleteDoc, doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { ref } from 'vue';
import { ISubject } from '../../../views/allSubject/types/Subject.interface';
import { db } from '../../services/firebase';

const subjectCollection = collection(db, 'subjects');

const getListSubjects = ref();
const getSubjectDetail = ref();
const errorMessage = ref(false);
const showBtnEdit = ref(false);

onSnapshot(subjectCollection, (querySnapshot) => {
  const fbSubjects: { id: string; title: any; description: any; }[] = [];
  querySnapshot.forEach((doc) => {
    const subject = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().title,
    }
    fbSubjects.push(subject);
  })
  getListSubjects.value = fbSubjects;
})

const addSubject = async (data: ISubject) => {
  if (data.title && data.description) {
    const newDoc = doc(subjectCollection);
    data.id = newDoc.id
    await setDoc(newDoc, data);
    data.title = '',
      data.description = ''
  } else {
    errorMessage.value = true;
  }
}

const btnDelete = (id: any) => {
  deleteDoc(doc(subjectCollection, id));

}

const getSubject = (id: any) => {
  onSnapshot(doc(db, 'subjects', id), (doc) => {
    getSubjectDetail.value = {
      id: id,
      title: doc.data()?.title,
      description: doc.data()?.description,
    };
  });
}

const updateSubject = (data: ISubject|any) => {
  if (data.title && data.description) {
    const subRef = doc(db, 'subjects', data.id);
    updateDoc(subRef, data);
    onSnapshot(subRef, (doc) => {
      getSubjectDetail.value = {
        id: doc.data()?.id,
        title: doc.data()?.title,
        description: doc.data()?.description
      }
    })
    data.title = '',
    data.description = '',
    showBtnEdit.value = false,
    errorMessage.value = false
  } else {
    errorMessage.value = true;
  }
}

export {
  getListSubjects,
  addSubject,
  getSubjectDetail,
  getSubject,
  errorMessage,
  btnDelete,
  updateSubject,
  showBtnEdit
}
