import "../styles/globals.css";
import "@radix-ui/themes/styles.css";
// import '../styles/theme-config.css'
import { FC, ReactNode } from "react";
import { Theme } from "@radix-ui/themes";
import Header from "../components/header/Header";


const darkMode = "light";

export const metadata = {
  title: "ABRACE",
  description: "ONG de adoção - ADICIONAR MELHOR DESCRIÇÃO",
};

interface MyProps {
  children?: ReactNode;
}

const RootLayout: FC<MyProps> = (props) => {
  return (
    <html lang="pt-BR">
      <body>
        <Theme          
          grayColor="sage"
          accentColor="lime"
          panelBackground="translucent"
          scaling="100%"
          radius="large"
          appearance={darkMode}
        >
          <Header />
          <main>{props.children}</main>
        </Theme>
      </body>
    </html>
  );
};

export default RootLayout;
