import './App.css'
import Grandpa from './Components/Grandpa/Grandpa';
import ReUseableForm from './Components/ReUseableForm/ReUseableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {

  
  const handleSignUpSubmit = data => {
    console.log('sign-up data' , data);
}


const handleUpdateProfile = data => {
  console.log('Update Profile data' , data);
}



  return (
    <>
      
      <h1>Form Master</h1>

      <Grandpa></Grandpa>



      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReUseableForm 
      formTitle={'Sign-up'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign UP</h2>
          <p>Please sign up right now</p>
        </div>
      </ReUseableForm>

      <ReUseableForm 
      formTitle={'Profile-update'} 
      handleSubmit={handleUpdateProfile}  
      submitBtnText='Update'>
        <div>
          <h2> Profile Update</h2>
          <p>Need profile update right now</p>
        </div>
      </ReUseableForm> */}
      
    </>
  )
}

export default App
