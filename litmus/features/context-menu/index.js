import {openContextMenu, Menu} from "cx/widgets";
import {Controller} from "cx/ui";

class ParentController extends Controller {
   action() {
      alert('Action');
   }
}

export default (
   <cx>
      <div
         controller={ParentController}
         onContextMenu={(e, instance) => openContextMenu(e, (
            <cx>
               <Menu>
                  <a href="#" onClick="action">Action</a>
                  <a href="#">Item 2</a>
                  <a href="#">Item 3</a>
                  <a href="#">Item 4</a>
                  <a href="#">Item 5</a>
                  <a href="#">Item 6</a>
               </Menu>
            </cx>
         ), instance)}
         style="padding: 5px; border: 1px solid lightgray"
      >
         Right Click Here
      </div>

      <div
         onContextMenu={(e, {store}) => openContextMenu(e, (
            <cx>
               <div>This menu doesn't contain any focusable content.</div>
            </cx>
         ), store)}
         style="padding: 5px; border: 1px solid lightgray"
      >
         Non-Focusable
      </div>
   </cx>
);
