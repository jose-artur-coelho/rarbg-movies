import { Cart } from "./Cart";
import { Search } from "./Search";

const logoStyles = {
  color: "#0470D3",
  fontSize: "48px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  letterSpacing: "1.44px",
  WebkitTextStroke: "1px #FFF",
  textStroke: "1px #FFF",
};

const headerStyles = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const searchCartStyles = {
  width: "15rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export function Header() {
  return (
    <header style={headerStyles}>
      <h1 style={logoStyles}>RARBG</h1>
      <div style={searchCartStyles}>
        <Search />
        <Cart />
      </div>
    </header>
  );
}
