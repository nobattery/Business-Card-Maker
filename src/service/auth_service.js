import firebase from "firebase";
import firebaseApp from "./firebase";

//https://firebase.google.com/docs/auth/web/start?authuser=0 에서 firebase 사용법 참고
class AuthService {
  //login : auth().signInWithPopul() - popup으로 로그인창을 띄우는 API
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  //logout : auth().signOut() - 로그아웃
  logout() {
    return firebaseApp.auth().signOut();
  }

  //사용자 정보가 바뀔 때 마다 전달받는 사용자 정보를 onUserChange()에 담아 call back
  onAuthChange(onUserChanged) {
    firebaseApp.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
