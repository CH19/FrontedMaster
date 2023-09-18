const feather = require('feather-icons');
console.log(feather.icons.mail.contents);
const circle = {}
export default function Nav(){
    return (
        <>
        <nav className="navbar navs">
  <div className="container-fluid nav-container">
    {/* se haria un for para recorrer y crear un subcomponente si se supiera */}
    <a className="navbar-brand btn btn-light" href="#"><div dangerouslySetInnerHTML={{ __html: feather.icons.home.toSvg()}}></div></a>
    <a className="navbar-brand btn btn-light" href="#"><div dangerouslySetInnerHTML={{__html: feather.icons.search.toSvg()}}></div></a>
    <a className="navbar-brand btn btn-light" href="#"><div dangerouslySetInnerHTML={{__html: feather.icons.edit.toSvg()}}></div></a>
    <a className="navbar-brand btn btn-light" href="#"><div dangerouslySetInnerHTML={{__html: feather.icons.heart.toSvg()}}></div></a>
    <a className="navbar-brand btn btn-light" href="#"><div dangerouslySetInnerHTML={{__html: feather.icons.user.toSvg()}}></div></a>
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