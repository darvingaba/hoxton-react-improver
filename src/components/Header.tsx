import { Link } from "react-router-dom";


export function Header(){
    return (
      <header>
        <ul className="header">
          <Link  to={"/form"}>
          <li className="home">
            <a href="#">Set yor Data</a>
          </li>
          </Link>
          <Link to={"/appointment"}>
          <li className="appointments">
            <a href="#">Appointments</a>
          </li>
          </Link>
        </ul>
      </header>
    );
}