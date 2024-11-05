export const generateItems = (dirName: string, numPhotos: number) => {
    let items = [];
    for (let i = 1; i <= numPhotos; i++) {
        items.push(`/${dirName}/${i}.jpg`);
    }
    return items.map((item, idx) => <img src={item} alt={`${idx}_${dirName}.jpg`}/>);
}