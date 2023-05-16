import { useEffect, useState } from "react"

type UserPropsWithId = { id: string, username: string, email: string, password: string }
type UserProps = Omit<UserPropsWithId, 'id'>

function App() {
  const [data, setData] = useState<UserPropsWithId[]>([])
  const [user, setUser] = useState<UserProps>({
    username: '',
    email: '',
    password: ''
  })

  const getUsers = () => {
    fetch('http://localhost:3000/users').then((response) => response.json()).then(data => { console.log(data); setData(data) })
  }

  useEffect(() => {
    getUsers()
  }, [])

  const handleChange = (value: string, type: keyof UserProps) => {
    setUser(prev => ({
      ...prev,
      [type]: value
    }));
  }

  const handleSubmit = () => {
    fetch('http://localhost:3000/users',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      .then((response) => response.json())
      .then(data => console.log(data))
  }

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
    getUsers()
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: 40 }}>
      <div style={{ maxWidth: '50%', boxSizing: 'border-box', minWidth: 800 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', minWidth: 800 }}>
          <p style={{ width: 50 }}>ID</p>
          <p style={{ width: 200 }}>İsim</p>
          <p style={{ width: 200 }}>E-mail</p>
          <p style={{ width: 150 }}>Şifre</p>
          <p style={{ width: 80 }}></p>
        </div>
        {data.map(user =>
          <div key={user.id} style={{ display: 'flex', justifyContent: 'space-between', minWidth: 800, paddingTop: 10, paddingBottom: 10 }}>
            <p style={{ width: 50 }}>{user.id}</p>
            <p style={{ width: 200 }}>{user.username}</p>
            <p style={{ width: 200 }}>{user.email}</p>
            <p style={{ width: 150 }}>{user.password}</p>
            <button style={{ width: 80, height: 30, color: 'white', backgroundColor: '#E43843', border: 'none', fontWeight: 'bold', borderRadius: 3, cursor: 'pointer' }} onClick={() => handleDelete(user.id)}>Sil</button>
          </div>
        )}
      </div>
      <div style={{ maxWidth: '50%', margin: 20, padding: 20, height: 220, backgroundColor: 'whitesmoke' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 320, height: 200, padding: 10 }}>
          <div>
            <span style={{ width: 120, display: 'inline-block' }}>Kullanıcı Adı</span>:
            <input type="text" value={user.username} onChange={(event) => handleChange(event.target.value, 'username')} style={{ marginLeft: 10 }} />
          </div>
          <div>
            <span style={{ width: 120, display: 'inline-block' }}>E-mail</span>:
            <input type="text" value={user.email} onChange={(event) => handleChange(event.target.value, 'email')} style={{ marginLeft: 10 }} />
          </div>
          <div>
            <span style={{ width: 120, display: 'inline-block' }}>Şifre</span>:
            <input type="text" value={user.password} onChange={(event) => handleChange(event.target.value, 'password')} style={{ marginLeft: 10 }} />
          </div>
          <input type='submit' value="Kaydet" style={{ alignSelf: 'end', padding: 10, width: 140, backgroundColor: '#3DA933', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: 3, cursor: 'pointer' }} />
        </form>
      </div>
    </div>
  )
}

export default App
