import { CarouselItem } from "@/components/ui/carousel";

const onImageClick = (url: string) => {
    window.open(url, "_blank");
}

export const generateItems = (dirName: string, numPhotos: number) => {
    let items = [];
    for (let i = 1; i <= numPhotos; i++) {
        items.push(`/${dirName}/${i}.jpg`);
    }
    return items.map((item, idx) => 
        <CarouselItem key={`${dirName}_item`}>
            <img src={item} alt={`${idx}_${dirName}.jpg`} onClick={() => onImageClick(item)}/>
        </CarouselItem>
    );
}