//Add imports here

const countryFacade = () => {

  function handleErrors(res){
    if(!res.ok){
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

  const getLabels = async () => {
    const response = await fetch('http://localhost:3333/labels').then(handleErrors);
    return response;
  }

  const getCountries = async () => {
    const response = await fetch('http://localhost:3333/countries').then(handleErrors);
    return response;
  }

  return {
    getLabels,
    getCountries
  }
}

export default countryFacade();