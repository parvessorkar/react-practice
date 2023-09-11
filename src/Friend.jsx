export default function Friend({friend}) {
  const [name, email] = friend;
  return <div className="color">
    <h2>name: {name}</h2>
    <h2>email: {email}</h2>
  </div>
}