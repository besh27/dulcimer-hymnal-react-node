import hymnalData from '../data/hymnalData';

function defaultFilters(){
    if(window.location.pathname === '/free-hymn-sheet-music'){
        let hymns = hymnalData.filter(hymn => hymn.type === 0);
        console.log(`Path: ${window.location.pathname}`);
        console.log("Type 0!");
        return hymns;
    }
    else if(window.location.pathname === '/volume-1'){
        let  hymns = hymnalData.filter(hymn => hymn.type === 1);
        console.log(`Path: ${window.location.pathname}`);
        console.log("Type 1!");
        return hymns;
    }
    else if(window.location.pathname === '/volume-2'){
        let  hymns = hymnalData.filter(hymn => hymn.type === 2);
        console.log(`Path: ${window.location.pathname}`);
        console.log("Type 2!");
        return hymns;
    }
    else if(window.location.pathname === '/free-hyms-from-dulcimer-hymnal'){ 
        let  hymns = hymnalData.filter(hymn => hymn.type === 1 || hymn.type === 2);
        console.log(`Path: ${window.location.pathname}`);
        console.log("Type 2!");
        return hymns;   
    }
    else if(window.location.pathname === '/misc-dulcimer-arrangements'){
        let hymns = hymnalData.filter(hymn => hymn.type === 3);
        console.log(`Path: ${window.location.pathname}`);
        console.log("Type 3!");
        return hymns;
    } else {
        let hymns = hymnalData;
        console.log(`Path: ${window.location.pathname}`);
        console.log("No Filter!");
        return hymns;
    }
}
export default defaultFilters;

