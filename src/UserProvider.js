import React, { createContext, useReducer, useContext } from 'react';
import UserContext from 'UserContext';

const UserProvider = () => {
  return (
    <UserContext.Consumer>
      {value => <div>{value.user}</div>}
    </UserContext.Consumer>
  );
};


// import {authService} from "fbase";
 

//   const initialState = {
//     user: {
//       loading: false,
//       data: null,
//       error: null
//     }
//   };
  
//   // 로딩중일 때 바뀔 상태 객체
//   const loadingState = {
//     loading: true,
//     data: null,
//     error: null
//   };
  
//   // 성공했을 때의 상태 만들어주는 함수
//   const success = data => ({
//     loading: false,
//     data,
//     error: null
//   });
  
//   // 실패했을 때의 상태 만들어주는 함수
//   const error = error => ({
//     loading: false,
//     data: null,
//     error: error
//   });

//  function usersReducer(userState, action) {
//     switch (action.type) {
//       case 'AUTH_CHANGE':
//         return {
//           ...userState,
//           users: loadingState
//         };
//       case 'AUTH_CHANGE_SUCCESS':
//         return {
//           ...userState,
//           users: success(action.data)
//         };
//       case 'AUTH_CHANGE_ERROR':
//         return {
//           ...userState,
//           users: error(action.error)
//         };
//       case 'REFRESH_USER':
//         return {
//           ...userState,
//           users: loadingState
//         };
//       case 'REFRESH_USER_SUCCESS':
//         return {
//           ...userState,
//           users: success(action.data)
//         };
//       case 'REFRESH_USER_ERROR':
//         return {
//           ...userState,
//           users: error(action.error)
//         };
//       case 'GET_USER':
//         return {
//           ...userState,
//           user: loadingState
//         };
//       case 'GET_USER_SUCCESS':
//         return {
//           ...userState,
//           user: success(action.data)
//         };
//       case 'GET_USER_ERROR':
//         return {
//           ...userState,
//           user: error(action.error)
//         };
//       default:
//         throw new Error(`Unhanded action type: ${action.type}`);
//     }
//   }


//   const UsersStateContext = createContext(null);
//   const UsersDispatchContext = createContext(null);

//   export function UsersProvider({ children }) {
//     const [state, dispatch] = useReducer(usersReducer, initialState);
//     return (
//       <UsersStateContext.Provider value={state}>
//         <UsersDispatchContext.Provider value={dispatch}>
//           {children}
//         </UsersDispatchContext.Provider>
//       </UsersStateContext.Provider>
//     );
//   }
// // State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
// export function useUsersState() {
//   const state = useContext(UsersStateContext);
//   if (!state) {
//     throw new Error('Cannot find UsersProvider');
//   }
//   return state;
// }

// // Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
// export function useUsersDispatch() {
//   const dispatch = useContext(UsersDispatchContext);
//   if (!dispatch) {
//     throw new Error('Cannot find UsersProvider');
//   }
//   return dispatch;
// }

//   // const refreshUser = () => {
//   //   const user = authService.currentUser;
//   //   setUserObj({
//   //     uid: user.uid,
//   //     displayName: user.displayName,
//   //     updateProfile: (str) => user.updateProfile(str)
//   //   })
//   // }

//   export function refreshUser(dispatch) {
//     dispatch({ type: 'REFRESH_USER' });
//     try {
//       dispatch({ type: 'REFRESH_USER_SUCCESS', data: authService.currentUser });
//     } catch (e) {
//       dispatch({ type: 'REFRESH_USER_ERROR', error: e });
//     }
//   }
  

// export async function authChange(dispatch) {
//   dispatch({ type: 'AUTH_CHANGE' });
//   try {
//     authService.onAuthStateChanged((user) => 
//     {
//       if(user){
//         //setUserObj({
//         //   uid: user.uid,
//         //   displayName: user.displayName,
//         //   updateProfile: (str) => user.updateProfile(str)
//         // });
//       }else{
//         //setUserObj(false);
//       }

//       //setInit(true);
//     }
//     );
//     //dispatch({ type: 'AUTH_CHANGE_SUCCESS', data: response.data });
//   } catch (e) {
//     dispatch({ type: 'AUTH_CHANGE_ERROR', error: e });
//   }
// }