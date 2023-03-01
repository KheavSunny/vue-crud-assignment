import { defineStore } from "pinia";
import { ISubject } from "../../views/allSubject/types/Subject.interface";
import axiosClient from "../axios/axios";

export const useSubjectStore = defineStore('subject', {
    state: () => {
        return {
            subjects: [] as ISubject[],
            subject: {} as ISubject,
        };
    },
    actions: {
        async getSubjects() {
            try {
                this.subjects = await axiosClient.get('subjects').then((res) => res.data);
            } catch (err) {
                console.log(err);
            }
        },
        async addSubject(data: ISubject) {
            try {
                await axiosClient.post('subjects', data).then((res) => this.subjects.push(res.data));
            } catch (err) {
                console.log(err);
            }
        },
        async deleteSubject(id: number) {
            try {
                await axiosClient.delete('subjects/' + id);
            } catch (err) {
                console.log(err);
            }
        },

        async getSubject(id: number) {
            try {
                return await axiosClient.get('subjects/' + id).then((res) => {
                    if ( res.status === 200 ) {
                        return res.data
                    }
                });
            } catch(err) {
                console.log(err);
            }
        },

        async updateSubject(data: ISubject) {
            try {
                return await axiosClient.put('subjects/' + data.id, data).then((res) => {
                    if( res.status === 200 ) {
                        return res.data;
                    }
                })
            } catch(err) {
                console.log(data.id);
            }
        }
    },
    getters: {
    }
})