import { Injectable } from '@angular/core';
import { Game } from '../game.model';
import { Router } from '@angular/router';
import { NotificationService } from '../../shared/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopupComponent } from '../../shared/components/confirmation-popup/confirmation-popup.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  games: Game[] = [
    {
      "title": "EA SPORTS FC™ 25",
      "catagory": "Adventure",
      "genere": ["Simulation", "Sports"],
      "features": "Multiplayer",
      "headimg": "https://static.wikia.nocookie.net/logopedia/images/7/7a/EA_Sports_2005.png/revision/latest?cb=20170405133427",
      "mainimg": "https://static0.srcdn.com/wordpress/wp-content/uploads/sharedimages/2024/07/ea-sports-fc-25-tag-page-cover-art.jpg",
      "dispimg1": "https://images7.alphacoders.com/137/1377537.jpg",
      "dispimg2": "https://www.dsogaming.com/wp-content/uploads/2023/07/EA-Sports-FC-24-feature.jpg",
      "dispimg3": "https://cdn.wccftech.com/wp-content/uploads/2024/07/FC25_REV_VLAHOVIC_16x9_HIRES_WM-scaled.jpg",
      "discription": "EA SPORTS FC™ 25 gives you more ways to play and win for the club. Team up with friends in your favourite modes with the new 5v5 Rush, and manage your club to victory with more tactical control in every 11v11 match across every mode with FC IQ.",
      "price": 5999,
      "starRating": "4.5",
      "criticRating": 76,
      "id": "fc25"
    },
    {
      "title": "Forza Horizon 5",
      "catagory": "Racing",
      "genere": ["Racing", "Action", "Adventure"],
      "features": "Single Player",
      "headimg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6NLvqH6cC-R-FW8u9L6tmm3gE9mj9I7H0Q&s",
      "mainimg": "https://w0.peakpx.com/wallpaper/598/502/HD-wallpaper-forza-horizon-5-fh5-thumbnail.jpg",
      "dispimg1": "https://images.alphacoders.com/116/1168382.jpg",
      "dispimg2": "https://w0.peakpx.com/wallpaper/148/606/HD-wallpaper-forza-forza-horizon-5.jpg",
      "dispimg3": "https://i.pinimg.com/736x/b8/92/db/b892db1200eda432a00a5a48b4c38999.jpg",
      "discription": "Forza Horizon focuses specifically on casual street racing, rather than professionally on race tracks, as it takes place on a map of temporarily closed public roads. The open-world map that players can explore is based on the U.S. state of Colorado.",
      "price": 2999,
      "starRating": "4.8",
      "criticRating": 92,
      "id": "fh05"
    },
    {
      "title": "Spider-Man: Miles Morales",
      "catagory": "Open World",
      "genere": ["Open World", "Action", "Adventure"],
      "features": "Single Player",
      "headimg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6NLvqH6cC-R-FW8u9L6tmm3gE9mj9I7H0Q&s",
      "mainimg": "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "dispimg1": "https://wallpapercave.com/wp/wp8486012.jpg",
      "dispimg2": "https://s3-eu-west-1.amazonaws.com/gb.awsbucket.1/0144913_0.jpeg",
      "dispimg3": "https://cdn.wccftech.com/wp-content/uploads/2020/09/WCCFspidermanmilesmorales2.jpg",
      "discription": "Following the events of Marvel’s Spider-Man Remastered, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel’s New York, Miles must take up the mantle of Spider-Man and own it.",
      "price": 3299,
      "starRating": "4.8",
      "criticRating": 93,
      "id": "93sm"
    },
    {
      "title": "Ghost of Tsushima",
      "catagory": "Racing",
      "genere": ["Story", "Action", "Adventure"],
      "features": "Single Player",
      "headimg": "https://i.redd.it/6jkkjoutg4u41.jpg",
      "mainimg": "https://m.media-amazon.com/images/M/MV5BZDYxMzk1MmItYjBmOC00YjdhLWI1NTEtZTU3MTY5NGEzNzM2XkEyXkFqcGc@._V1_QL75_UY281_CR46,0,190,281_.jpg",
      "dispimg1": "https://i.pinimg.com/originals/84/3f/37/843f37b083bf08c7075bd345ed07dd0c.jpg",
      "dispimg2": "https://www.deadlynovels.in/wp-content/uploads/2023/06/1519396.jpg",
      "dispimg3": "https://i.ytimg.com/vi/ox6R5oBMPVc/maxresdefault.jpg",
      "discription": "In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet led by the ruthless and cunning general, Khotun Khan. As the island burns in the wake of the first wave of the Mongol assault, courageous samurai warrior Jin Sakai stands resolute. As one of the last surviving members of his clan, Jin is resolved to do whatever it takes, at any cost, to protect his people and reclaim his home. He must set aside the traditions that have shaped him as a warrior to forge a new path, the path of the Ghost, and wage an unconventional war for the freedom of Tsushima.",
      "price": 3999,
      "starRating": "4.8",
      "criticRating": 97,
      "id": "gt97"
    },
    {
      "title": "Far Cry 6",
      "catagory": "Adventure",
      "genere": ["Story", "First-Person", "Adventure"],
      "features": "Single Player",
      "headimg": "https://cdn2.steamgriddb.com/icon/680f0fc378c4abff9d8f271c95e799c3/32/256x256.png",
      "mainimg": "https://image.api.playstation.com/vulcan/img/rnd/202106/0722/4MxzDZKZwtEWyMWZghvwd7bQ.jpg",
      "dispimg1": "https://www.glitched.online/wp-content/uploads/2020/07/EcwKmAlWAAIppol.jpg",
      "dispimg2": "https://i.ytimg.com/vi/JKn7IAkBFUs/maxresdefault.jpg",
      "dispimg3": "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6QJTmU8IyLx9MqNIVsilug/f81c753d6ad6a4cd0035c9bcdf4e205d/far-cry-6-heroBanner.jpg",
      "discription": "Gameplay focuses on combat and exploration, players fight enemy soldiers and dangerous wildlife using a wide array of weapons and gadgets.",
      "price": 600,
      "starRating": "4.5",
      "criticRating": 87,
      "id": "a9a4"
    },
    {
      "title": "Ghostwire: Tokyo",
      "catagory": "Horror",
      "genere": ["Horror", "Action", "Adventure"],
      "features": "Single Player",
      "headimg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6NLvqH6cC-R-FW8u9L6tmm3gE9mj9I7H0Q&s",
      "mainimg": "https://m.media-amazon.com/images/M/MV5BNzVmMmJjZWYtZmVkZi00NmE1LWFmZGUtYjBkNjBhMTk4MjBjXkEyXkFqcGc@._V1_.jpg",
      "dispimg1": "https://w0.peakpx.com/wallpaper/844/952/HD-wallpaper-ghostwire-tokyo-8k-gaming-poster.jpg",
      "dispimg2": "https://wallpapers.com/images/hd/ghostwire-tokyo-gameplay-on9hizp8j5ovsphq.jpg",
      "dispimg3": "https://images4.alphacoders.com/120/1209850.jpg",
      "discription": "Tokyo's population has vanished and deadly supernatural forces prowl the streets. Hone your otherwordly abilities to unravel the truth behind the disappearance and save the city. Explore brand-new single player content with the Spider's Thread update!",
      "price": 2499,
      "starRating": "4",
      "criticRating": 70,
      "id": "gwt3"
    },
    
    
    
    {
      "title": "Assassin's Creed Odyssey",
      "catagory": "Openworld",
      "genere": ["Stelth", "Action", "Adventure"],
      "features": "Single Player",
      "headimg": "https://i.pinimg.com/736x/7a/e0/18/7ae0189baea79bf99ddb615efa6835c6.jpg",
      "mainimg": "https://cdn.europosters.eu/image/1300/posters/assassins-creed-odyssey-one-sheet-i83432.jpg",
      "dispimg1": "https://i.ytimg.com/vi/ABWPRkxqUQ8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD1F9VgAASDVZ8BeSNna8lkpaVebw",
      "dispimg2": "https://cdn.mos.cms.futurecdn.net/Uem4UFY4P9PBLAh9p2DXpL.jpg",
      "dispimg3": "https://wallpapersmug.com/download/1920x1080/3f9eec/video-game-assassins-creed-odyssey_-kassandra.jpg",
      "discription": "Assassin's Creed Odyssey is an action-adventure game that tells the story of the Peloponnesian War between Athens and Sparta from 431–422 BC.",
      "price": 1200,
      "starRating": "4",
      "criticRating": 80,
      "id": "182b"
    },
    {
      "title": "Need for Speed Unbound",
      "catagory": "Racing",
      "genere": ["Racing", "Action", "Adventure"],
      "features": "Single Player",
      "headimg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyK8lVivjzAt1ilxRWKFUrQ6izBehucr6ZyQ&s",
      "mainimg": "https://upload.wikimedia.org/wikipedia/en/d/db/Need_for_Speed_Unbound.png",
      "dispimg1": "https://forum.xboxera.com/uploads/default/original/3X/2/0/2017910b1f595adeeb941e2bc8855aa2f7e90fb1.jpeg",
      "dispimg2": "https://www.topgear-magazine.fr/wp-content/uploads/2022/10/Need-For-Speed-Unbound-Gameplay-01.jpg",
      "dispimg3": "https://media.altchar.com/prod/images/gm_article_promo_image/3cd038e479b2-nfs-unbound-effects.jpg",
      "discription": "Need for Speed Unbound is a racing game set in a fictional city called Lakeshore City, which is based on Chicago.",
      "price": 2000,
      "starRating": "4",
      "criticRating": 72,
      "id": "66cd"
    },
    {
      "title": "Black Myth: Wukong",
      "catagory": "Adventure",
      "genere": ["Story", "Action", "Adventure"],
      "features": "Single Player",
      "headimg": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/677af80a-4f37-4a8c-8228-1dc57a31cf6f/dhxs1en-b9f849b8-fb1c-4c4a-91f8-68a1bb70066c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3N2FmODBhLTRmMzctNGE4Yy04MjI4LTFkYzU3YTMxY2Y2ZlwvZGh4czFlbi1iOWY4NDliOC1mYjFjLTRjNGEtOTFmOC02OGExYmI3MDA2NmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kdb2XbiErcEFtKC6WNKUsFKgWhmzkTngFgD0xe31Zk4",
      "mainimg": "https://m.media-amazon.com/images/M/MV5BNGVmZTVjZDMtMzkyZi00MTczLWE4OTUtY2Y1ODBlMGFlYTAxXkEyXkFqcGc@._V1_.jpg",
      "dispimg1": "https://sm.ign.com/t/ign_za/review/b/black-myth/black-myth-wukong-review_u4qn.1200.jpg",
      "dispimg2": "https://external-preview.redd.it/doVHvow4sZ4lh9X8t4Nsh6r21d9lX7RtKERfKY_eU8I.jpg?auto=webp&s=8a2c3a925755086d17de549eca61af8dc8ac6bd9",
      "dispimg3": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/09/black-myth-wukong-header-image.jpg",
      "discription": "Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past",
      "price": 3499,
      "starRating": "5",
      "criticRating": 94,
      "id": "55bm"
    },
    {
      "title": "Batman™ Arkham Knight",
      "catagory": "Stealth",
      "genere": ["Stealth", "Action", "Fighting"],
      "features": "Single Player",
      "headimg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6NLvqH6cC-R-FW8u9L6tmm3gE9mj9I7H0Q&s",
      "mainimg": "https://i.pinimg.com/originals/62/83/86/62838668e1fb8ac7902d88038536490d.jpg",
      "dispimg1": "https://static.dc.com/dc/files/default_images/GalleryGames_1900x1080_BAK_quote_558c7983815080.78017842.jpg?w=1200",
      "dispimg2": "https://preview.redd.it/mox3vm7s1ie41.jpg?auto=webp&s=2a4d2fd4ad7e2e28e0f6f9e443a72ef4f2a3fd42",
      "dispimg3": "https://i.redd.it/5oquxm64ayq31.jpg",
      "discription": "Batman™: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile. The highly anticipated addition of this legendary vehicle, combined with the acclaimed gameplay of the Arkham series, offers gamers the ultimate and complete Batman experience as they tear through the streets and soar across the skyline of the entirety of Gotham City. In this explosive finale, Batman faces the ultimate threat against the city that he is sworn to protect, as Scarecrow returns to unite the super criminals of Gotham and destroy the Batman forever.",
      "price": 1299,
      "starRating": "4.8",
      "criticRating": 82,
      "id": "82bm"
    },
    
    {
      "title": "CSGO",
      "catagory": "Shooting",
      "genere": ["Shooting", "First-Person", "Action"],
      "features": "Multiplayer",
      "headimg": "https://c4.wallpaperflare.com/wallpaper/983/120/28/counter-strike-contra-csgo-wallpaper-preview.jpg",
      "mainimg": "https://myhotposters.com/cdn/shop/products/mL3926_1024x1024.jpg?v=1574110218",
      "dispimg1": "https://images8.alphacoders.com/132/1329760.jpeg",
      "dispimg2": "https://cdn.mos.cms.futurecdn.net/ZsPF2jAFh8NjiXrkexhSrR-1200-80.jpg",
      "dispimg3": "https://c4.wallpaperflare.com/wallpaper/208/691/734/counter-strike-counter-strike-global-offensive-game-cg-games-art-wallpaper-preview.jpg",
      "discription": "The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes.",
      "price": 0,
      "starRating": "4.8",
      "criticRating": 92,
      "id": "b297"
    },
    {
      "title": "F1 24",
      "catagory": "Racing",
      "genere": ["Racing", "Action", "Adventure"],
      "features": "Single Player",
      "headimg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6NLvqH6cC-R-FW8u9L6tmm3gE9mj9I7H0Q&s",
      "mainimg": "https://prod-printler-front-as.azurewebsites.net/media/photo/141022.jpg?mode=crop&width=727&height=1024&rnd=0.0.1",
      "dispimg1": "https://i0.wp.com/xboxera.com/wp-content/uploads/2024/06/f124_big.jpg?fit=1120%2C630&ssl=1",
      "dispimg2": "https://cdn.mos.cms.futurecdn.net/i2Wghktz63BznJbjmpJY79.jpg",
      "dispimg3": "https://www.geekinout.pt/storage/552/01HWN9C38TB30CVQ7V0A8A4V9T.jpg",
      "discription": "EA Sports F1® 24 is a racing video game developed by Codemasters and published by EA Sports.",
      "price": 1500,
      "starRating": "4",
      "criticRating": 70,
      "id": "f124"
    },
    {
      "title": "God of War Ragnarök",
      "catagory": "Role play",
      "genere": ["Action", "Adventure", "Fantasy"],
      "features": "Single Player",
      "headimg": "https://i.etsystatic.com/23631389/r/il/da40d6/2655429430/il_fullxfull.2655429430_ijir.jpg",
      "mainimg": "https://cdn.europosters.eu/image/350/posters/playstation-god-of-war-i116582.jpg",
      "dispimg1": "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/aqZdSwWyy9JcQ66BxHDKrky6.jpg",
      "dispimg2": "https://www.techspot.com/articles-info/2897/images/2024-09-23-image-7.jpg",
      "dispimg3": "https://cdn.storifyme.com/accounts/cashify-in-0561312/assets/f-kratos-god-of-war-ragnarok-ps5-2k-wallpaper-2560x1440-94-71421681021812316.jpeg?t=1681021879000",
      "discription": "In God of War, players control Kratos, a Spartan warrior who is sent by the Greek gods to kill Ares, the god of war. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Along the way they will explore stunning, mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters.",
      "price": 1000,
      "starRating": "4",
      "criticRating": 85,
      "id": "4190"
    },
    {
      "title": "Battlefield™ 2042",
      "catagory": "Shooting",
      "genere": ["First Person", "Shooter", "Action"],
      "features": "Multilayer",
      "headimg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6NLvqH6cC-R-FW8u9L6tmm3gE9mj9I7H0Q&s",
      "mainimg": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Battlefield_2042_cover_art.jpg/220px-Battlefield_2042_cover_art.jpg",
      "dispimg1": "https://i.ytimg.com/vi/f7koJ1jn0Ao/maxresdefault.jpg",
      "dispimg2": "https://wallpapers.com/images/hd/battlefield-4k-7kawkr7kjnfhbvqy.jpg",
      "dispimg3": "https://w0.peakpx.com/wallpaper/33/895/HD-wallpaper-2021-battlefield-2042-mobile-game-poster.jpg",
      "discription": "Battlefield™ 2042 marks the return to the iconic all-out warfare of the franchise. Squad up and bring a cutting-edge arsenal into massive-scale battlegrounds, set in a near-future world transformed by disorder.",
      "price": 2999,
      "starRating": "3",
      "criticRating": 32,
      "id": "bf42"
    },
    {
      "title": "A Way Out",
      "catagory": "Story",
      "genere": ["Story", "Action", "Adventure"],
      "features": "Multiplayer",
      "headimg": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/955cb47f-b222-43fa-b3cc-f25d70fdefea/deasdly-975ccb75-b5c0-4acd-a161-c8e7348e4e46.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1NWNiNDdmLWIyMjItNDNmYS1iM2NjLWYyNWQ3MGZkZWZlYVwvZGVhc2RseS05NzVjY2I3NS1iNWMwLTRhY2QtYTE2MS1jOGU3MzQ4ZTRlNDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0RR6TiT2U23xW1KFBb_3DJwFq3x9m1kPANEM-5chbUA",
      "mainimg": "https://m.media-amazon.com/images/M/MV5BYjZhYTc1YTEtNGY4OS00MDUxLWJkOTktOTMxMjMzYTYyN2JhXkEyXkFqcGc@._V1_.jpg",
      "dispimg1": "https://i.ytimg.com/vi/VWvRa4D98Zg/maxresdefault.jpg",
      "dispimg2": "https://www.gamereactor.eu/media/56/svenskahazelightutannonserar_2115653b.jpg",
      "dispimg3": "https://c4.wallpaperflare.com/wallpaper/462/90/336/video-game-a-way-out-wallpaper-preview.jpg",
      "discription": "From the creators of Brothers – A Tale of Two Sons comes A Way Out, an exclusively co-op adventure where you play the role of one of two prisoners making their daring escape from prison. What begins as a thrilling breakout quickly turns into an unpredictable, emotional adventure unlike anything seen or played before. Escaping prison with a complete stranger isn't ideal circumstances, but Leo and Vincent have too much riding on it to second-guess themselves now. As freedom gets closer and closer, they'll have to learn to trust each other if they want to make it to the other side.",
      "price": 359,
      "starRating": "4.5",
      "criticRating": 69,
      "id": "69wo"
    },
    {
      "title": "A Plague Tale Requiem",
      "catagory": "Role play",
      "genere": ["Action", "Adventure", "Fantasy"],
      "features": "Single Player",
      "headimg": "https://cdn2.steamgriddb.com/icon/5ea2f0a1257f0d9c2c243d7d4047aa8f.ico",
      "mainimg": "https://store-images.s-microsoft.com/image/apps.4956.13537574391772742.e387dd56-e35c-40fb-bc0c-c0c1decef3a1.f27cfe2b-b8b2-47f3-a92e-0eebe096efa2",
      "dispimg1": "https://cdn.focus-home.com/fhi-fastforward-admin/custom/a-plague-tale-requiem/section-3-background.jpg",
      "dispimg2": "https://images.alphacoders.com/128/1281717.jpg",
      "dispimg3": "https://i0.wp.com/waytoomany.games/wp-content/uploads/2022/10/A-Plague-Tale_-Requiem_20221012003809.jpg?ssl=1",
      "discription": "A Plague Tale: Requiem is the sequel to the award-winning adventure, A Plague Tale: Innocence.",
      "price": 750,
      "starRating": "3.5",
      "criticRating": 70,
      "id": "c0ef"
    },
    {
      "title": "Resident evil 7: Biohazard",
      "catagory": "Horror",
      "genere": ["Horror", "Thriller", "Story"],
      "features": "Single Player",
      "headimg": "https://w0.peakpx.com/wallpaper/389/435/HD-wallpaper-resident-evil-7-biohazard-resident-evil-7-games-2016-games.jpg",
      "mainimg": "https://preview.redd.it/xq7xyf70ln271.jpg?width=640&crop=smart&auto=webp&s=505abd5b96e0de534854c777f258cf62abe99ff6",
      "dispimg1": "https://wallpapers.com/images/hd/intense-gameplay-from-resident-evil-7-mhq8xq9oz2h9vtjt.jpg",
      "dispimg2": "https://assets1.ignimgs.com/thumbs/userUploaded/2017/1/23/re7home-1484322346010-1485204956740.jpg",
      "dispimg3": "https://i.pcmag.com/imagery/reviews/03nvAxoQztjkN8zYGjWZprN-2.fit_lim.size_1050x591.v1569474016.jpg",
      "discription": "Resident Evil 7: Biohazard is a 2017 survival horror game developed and published by Capcom.",
      "price": 800,
      "starRating": "3.5",
      "criticRating": 68,
      "id": "d163"
    },
    {
      "title": "Call of Duty®: Modern Warfare II",
      "catagory": "Shooting",
      "genere": ["Shooting", "First-Person", "Action"],
      "features": "Multiplayer",
      "headimg": "https://e0.pxfuel.com/wallpapers/45/501/desktop-wallpaper-call-of-duty-logo-call-of-duty-minimalist.jpg",
      "mainimg": "https://i.pinimg.com/originals/13/2a/be/132abe929b7bde5319784511ae7c4545.jpg",
      "dispimg1": "https://images8.alphacoders.com/129/1291906.png",
      "dispimg2": "https://i.ytimg.com/vi/pieZI4i6rMg/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCZR5RNntheA955wOojqpwqdd0f8g",
      "dispimg3": "https://gamingtrend.com/wp-content/uploads/2022/10/MW2pc.jpg",
      "discription": "Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141. From small-scale, high-stakes infiltration tactical ops to highly classified missions, players will deploy alongside friends in a truly immersive experience.",
      "price": 800,
      "starRating": "4.8",
      "criticRating": 82,
      "id": "cc4a"
    },
    {
      "title": "GTA-V",
      "catagory": "Openworld",
      "features": "Single Player",
      "genere": ["Action", "Adventure", "Story"],
      "headimg": "https://i.pinimg.com/736x/1c/bf/4c/1cbf4c42001ca7250f5096cc2d284ba5.jpg",
      "mainimg": "https://m.media-amazon.com/images/I/51ejVht7-ML._AC_UF1000,1000_QL80_.jpg",
      "dispimg1": "https://w0.peakpx.com/wallpaper/298/258/HD-wallpaper-grand-theft-auto-trevor-gta-5-characters-games.jpg",
      "dispimg2": "https://assets1.ignimgs.com/thumbs/userUploaded/2015/4/13/gta54k-1428989219302.jpg",
      "dispimg3": "https://i.imgur.com/dkEOqlO.jpg",
      "discription": "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective.",
      "price": 500,
      "starRating": "5",
      "criticRating": 94,
      "id": "5d46"
    },
    {
      "title": "Blur",
      "catagory": "Racing",
      "genere": ["Racing", "Action", "Adventure"],
      "features": "Single Player",
      "headimg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6NLvqH6cC-R-FW8u9L6tmm3gE9mj9I7H0Q&s",
      "mainimg": "https://www.gamespot.com/a/uploads/scale_medium/mig/2/2/0/9/2222209-box_blur.png",
      "dispimg1": "https://images.alphacoders.com/600/600418.png",
      "dispimg2": "https://storage.ensigame.com/games/d23ff1cbd176c9fdb09e805b688fa570.jpg",
      "dispimg3": "https://i.ytimg.com/vi/wqOZ-PuvLi0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJ-_Ox_qOxQTYfNfzGIJaCqZsfmQ",
      "discription": "Blur was developed by Bizarre Creations and published by Activision. Blur features a racing style that incorporates real world cars and locales with arcade style handling and vehicular combat. The game is a spiritual successor to the Project Gotham Racing series.",
      "price": 1500,
      "starRating": "4",
      "criticRating": 70,
      "id": "58c0"
    },
  ];

  addedGames: Game[] = [];
  gamesOwned: Game[] = [];

  constructor(private router: Router,
    private notiService: NotificationService,
    public dialog: MatDialog) { }

  singlePurchase(game: Game) {

    // this.gamesOwned.forEach(ownedGame => {
    //   if ( game.id === ownedGame.id ) {
    //     this.notiService.openSnackbar('This g')
    //   }
    // });

    const dialogRef = this.dialog.open(ConfirmationPopupComponent);
    dialogRef.componentInstance.confirMsg = `Are you sure you want to proceed with this purchase of ₹${game.price}?`
    dialogRef.afterClosed().subscribe(isConfirm => {

      if (isConfirm) {
        console.log(isConfirm);
        const i:number = this.addedGames.indexOf(game);
        this.addedGames.splice(i, 1);
        this.gamesOwned.push(game);
      }
    });
  }

  addToCart(game: Game) {
    this.addedGames.push(game);
    this.notiService.openSnackbar('This game has been added to your cart!!!');
    // this.router.navigate(['/cart']);
  }

  removeFromCart(game: Game) {
    const foundGame = this.addedGames.find((g) => g.id === game.id);

    if (foundGame !== undefined) {
      const index = this.addedGames.indexOf(foundGame);
      this.addedGames.splice(index, 1);
      console.log(index);
      this.notiService.openSnackbar('This game has been Removed from your cart!!!');
    }
  }

  buyAllGames() {
    for (var i = 0; i < this.addedGames.length; i++) {
      this.gamesOwned.push(this.addedGames[i]);
      this.addedGames.splice(i, 1);
      i--; //decrement i IF we remove an item
    }
  }

  get total() {
    let amount: number = 0;
    this.addedGames.forEach(game => {
      amount = amount + game.price;
    });
    return amount;
  }
}
