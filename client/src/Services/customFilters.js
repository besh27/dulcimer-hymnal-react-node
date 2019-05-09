import defaultFilters from './defaultFilters';

function customFilters(){
    defaultFilters.filter((v,i) => defaultFilters.indexOf(v) === i)
}
export default customFilters;
