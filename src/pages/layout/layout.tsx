import { CartPopup, Header } from "@/widgets";

import { AuthorizeCard, Dropdown, Footer, IconButton } from "@/shared/ui";
import { Cart, Person } from "@/shared/assets";
import { useScreen } from "@/shared/hooks";

import st from "./styles.module.scss";

type Layout = {
  children: React.ReactNode;
};

export const Layout = (props: Layout) => {
  const { currentScreen } = useScreen();
  return (
    <>
      <Header
        actions={
          <>
            <div className={st.header_actions_wrapper}>
              <CartPopup />
            </div>

            {currentScreen !== "xs" && (
              <div className={st.header_actions_wrapper}>
                <Dropdown
                  justify="start"
                  align="bottom"
                  anchorEl={
                    <IconButton variant="contained" color="default">
                      <Person />
                    </IconButton>
                  }
                  triggerOn="click"
                >
                  <AuthorizeCard />
                </Dropdown>
              </div>
            )}
          </>
        }
      />

      <main className={st.main}>{props.children}</main>
      <Footer />
    </>
  );
};
