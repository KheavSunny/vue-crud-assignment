import { computed, ref } from "vue";
import { ISubject } from "../../../views/allSubject/types/Subject.interface";
import { useSubjectStore } from "../../store/subject";

const getSubjectDetail = ref();
const showBtnEdit = ref(false);
const errorMessage = ref(false);

const store = useSubjectStore();
store.getSubjects();

const getListSubjects = computed(() => store.subjects);

const addSubject = (data: ISubject) => {
    if (data.title && data.description) {
        store.addSubject(data);
        data.title = '';
        data.description = '';
        errorMessage.value = false;
    } else {
        errorMessage.value = true;
    }
}

const btnDelete = async (id: any) => {
    await store.deleteSubject(id);
    getSubjectDetail.value = '';
    store.getSubjects();
}

const getSubject = async (id: number) => {
    getSubjectDetail.value = await store.getSubject(id);
}

const updateSubject = async (data: ISubject) => {
    if (data.title && data.description) {
        const get_subject = await store.updateSubject(data);
        data.title = '';
        data.description = '';
        showBtnEdit.value = false;
        errorMessage.value = false;
        getSubjectDetail.value = get_subject;
        store.getSubjects();
    } else {
        errorMessage.value = true;
    }
}

export {
    getListSubjects,
    addSubject,
    errorMessage,
    btnDelete,
    getSubject,
    getSubjectDetail,
    updateSubject,
    showBtnEdit,
}