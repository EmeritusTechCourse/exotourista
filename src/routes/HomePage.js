import { Logo } from "../components/Logo/Logo";
import { SearchForm } from "../components/SearchForm/SearchForm";


export const HomePage = () => {
    const handleFormSearch = (data) => {
        console.log({data});
    }
    return <>
        <Logo/>
        <SearchForm onSearch={handleFormSearch}/>
    </>;
}