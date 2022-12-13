import { atom, selector } from 'recoil'
import { Task } from '../types/Task';

// reduxでいうstore
//  タスクの状態管理
export const addTitleState = atom<Array<Task>>({
	key: 'addTitleState',
  default: [],
});


export const addTitleStateLength = selector<number>({
	key: 'addTitleStateLength',
	// 追加されたタスクの個数を取得する関数
	get: ({ get }) => {
		const addTitleNumber: Array<Task> = get(addTitleState);
		return addTitleNumber?.length || 0;
	},
});