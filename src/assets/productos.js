const products = [{id: 1, name: 'cavatelli', price: 1000, category: 'cortas'},
{id: 2, name: 'gnocchi', price: 1000, category: 'cortas'},
{id: 3, name: 'agnolotti', price: 1500, category: 'rellenas'},
{id: 4, name: 'fagottini', price: 1500, category: 'rellenas'},
{id: 5, name: 'raviolones', price: 1000, category: 'integrales'},
{id: 6, name: 'rosantinos', price: 2000, category: 'especiales'},
{id: 7, name: 'mezzelunes', price: 2000, category: 'especiales'}]

const fetchProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(products), 1000)
    })
}

const fetchImage = (name) => {
    return new Promise(resolve => {
        import('./' + name + '.png').then(x => resolve(x.default))
    })
}

export default fetchProducts
export {fetchImage}