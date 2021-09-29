// imports HAVE to go first
import contact from "./components/contactform";

(() => {
    contact.contactMe();
    console.log(contact.message);
})();