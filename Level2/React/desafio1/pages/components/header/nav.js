import 'bootstrap/dist/css/bootstrap.css';

export default function Nav(){
    return (
        <>
        <nav className="navbar navs">
  <div className="container-fluid">
    {/* se haria un for para recorrer y crear un subcomponente si se supiera */}
    <a className="navbar-brand btn btn-light" href="#">#</a>
    <a className="navbar-brand btn btn-light" href="#">#</a>
    <a className="navbar-brand btn btn-light" href="#">#</a>
    <a className="navbar-brand btn btn-light" href="#">#</a>
    <a className="navbar-brand btn btn-light" href="#">#</a>
  </div>
</nav>

<style
  dangerouslySetInnerHTML={{
    __html:
      "\n\n.navs{\n  width: 20rem;\n  display: flex;\n  justify-content: space-around;\n  \n}\n"
  }}
/>

        </>
    )
}