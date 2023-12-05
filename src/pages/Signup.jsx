const styles = {
  cardStyle: {
    background: 'grey',
  },
};

const Signup = () => {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center">
      <div className="card text-white border-danger w-50" style={styles.cardStyle}>
      <h5 className="card-header">Sign Up</h5>
      <div className="card-body">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Username</label>
          <input type="username" className="form-control" placeholder="username"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="name@example.com"/>
        </div>
        <div>
          <label for="exampleFormControlInput1" className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="password"/>
        </div>
        <div className="col-auto d-flex justify-content-center">
          <button type="submit" className="btn btn-danger m-3">Create Account</button>
        </div>
        <div>
          <p className="text-center">Already have an account? <a href='#Login'>Click here to login.</a></p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Signup;