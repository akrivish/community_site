import ContactInfo from "../Components/ContactInfo"
import Latest from "../Components/Latest"
import Member from "../Components/Member"
const HomePage = () => {
    return (
        <>
        <div>
        <h1>
            Welcome to the HomePage!
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed auctor arcu eu lacus interdum, vel commodo nulla vehicula. 
        Pellentesque euismod magna in ex iaculis dapibus. Vestibulum vel lorem metus. Morbi tincidunt arcu id purus facilisis, a porta lectus feugiat .
        </p>
        <p>
        Aliquam lobortis posuere velit eget tempus.
         Sed vitae nibh nec nisi volutpat vehicula vel eget ipsum. 
         Sed vehicula hendrerit neque, vel interdum ipsum lacinia ac. 
         In tincidunt velit ac lorem varius, eu rutrum eros aliquam. Nunc vitae bibendum turpis. Sed non augue non elit suscipit malesuada a eu mauris. 
         Nam eget augue tellus.  Nulla id elit eget elit placerat luctus
        </p>
        </div>
        <div>
        <Member></Member>
        <Latest></Latest>
        <ContactInfo></ContactInfo>
        </div>
         </>
    )

}
export default HomePage