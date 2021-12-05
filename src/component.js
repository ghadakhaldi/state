function App() {
    const handleName=(x)=>{
      return alert(`hello,${x}`)
    }
    return (
      <div className="App">
    <Profile fullName ='khaldi Ghada' bio='' profession='web developer'>
      <img src={image}  />
    </Profile>
      </div>
    );
  }