import React, {useContext} from "react";
import { Context } from "../GlobalContext";
import { Footer } from "../components";

export default function FooterContainer() {
    const {setCurrentPage} = useContext(Context)
    const pages = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    function displayPagination() {

    }

  return (
    <Footer>
      <Footer.List>
          {pages.map((page,index) => <Footer.ListItem key={index}>
              <Footer.Button>{page}</Footer.Button>
              </Footer.ListItem>)}
      </Footer.List>
    </Footer>
  );
}
