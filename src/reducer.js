
// Utilizar Context y useReducer para gestionar el sistema de autenticación el en componente App.js

// Queremos guardar en el estado: autenticado (bool), el nombre del usuario (string), y su correo electrónico (string). 

// En el reducer queremos poder iniciar sesión, cerrar sesión, y cambiar el nombre/correo electrónico del usuario. 
// Actions: login, logout, changeUsername, changeEmail


// const isLogged = () => {
//     let logState = JSON.parse(localStorage.getItem(logKey))
//     if(logState === null){
//       logState = false;
//     }
//     return logState
//   }
// en initialState poner en auth:isLogged ?

const initialState = {auth: true, userName: 'Maruprin', email: 'maruprin@mymail.com' };

function reducer(state, action) {
  switch (action.type) {
    case 'login':
        return {auth: state.true};
    case 'logout':
        return {auth: state.false};
    case 'changeName':
        return {userName: state.action.payload};
    case 'changeEmail':
        return {email: state.action.payload};
    default:
      throw new Error();
  }
}

function authentication() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    </>
  );
}
