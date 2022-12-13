import { atom } from 'recoil'

// reduxでいうstore
//  inputTの中身の状態を管理
export const inputTitleState = atom<string>({
	key: 'inputTitleState',
  default: '',
});