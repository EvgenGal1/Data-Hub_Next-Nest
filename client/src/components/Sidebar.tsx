"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import ChevronRightIcon from "./icons/ChevronRightIcon";
import File from "./icons/File";
import AudiotrackIcon from "./icons/AudiotrackIcon";
import Book from "./icons/Book";
import Image from "./icons/Image";
import Video from "./icons/Video";
import PlaylistPlayIcon from "./icons/PlaylistPlayIcon";
import AlbumIcon from "./icons/AlbumIcon";
import CloudDownloadIcon from "./icons/CloudDownloadIcon";
import MailIcon from "./icons/MailIcon";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";
import PersonIcon from "./icons/PersonIcon";
// import InboxIcon from "./icons/InboxIcon";

// названия/пути/эл. пунктов боковой панели верх/середина/низ
const sideBarTopItems = [
  { text: "Файлы", href: "/files", elm: <File /> },
  { text: "Треки", href: "/tracks", elm: <AudiotrackIcon /> },
  { text: "Книги", href: "/books", elm: <Book /> },
  { text: "Картинки", href: "/images", elm: <Image /> },
  { text: "Видео", href: "/videos", elm: <Video /> },
];
const sideBarMiddleItems = [
  { text: "Плейлисты", href: "/playlists", elm: <PlaylistPlayIcon /> },
  { text: "Альбомы", href: "/albums", elm: <AlbumIcon /> },
  { text: "Закачать", href: "/download", elm: <CloudDownloadIcon /> },
];
const sideBarBottomItems = [
  { text: "Почта", href: "/mail", elm: <MailIcon /> },
  { text: "Корзина", href: "/basket", elm: <ShoppingCartIcon /> },
  { text: "ЛК", href: "/personal", elm: <PersonIcon /> },
  // { text: "Главная", href: "/", elm: <InboxIcon /> },
];

const Sidebar: React.FC<{ isOpen: boolean; handleDrawerClose: () => void }> = ({
  isOpen,
  handleDrawerClose,
}) => {
  // хук навигации NextJS
  const router = useRouter();
  // опред.актив.ссылок > .active
  const pathname = usePathname();

  return (
    <div className={`side-bar ${isOpen ? "isOpen" : ""}`}>
      <div className="side-bar-wrapper">
        <div className="side-bar__close">
          <button className="side-bar-button" onClick={handleDrawerClose}>
            {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        </div>
        <ul>
          {sideBarTopItems.map(({ text, href, elm }) => (
            // ! изменить архитек./stl на Link или нет. ! перезагрука при переходе на не сущ.стр. хотя тще-found должен раб.норм. - узнать точно
            <li
              // ! изменить архитек./stl на Link или нет. ! перезагрука при переходе на не сущ.стр. хотя тще-found должен раб.норм. - узнать точно
              // href={href}
              key={href}
              onClick={() => router.push(href)}
              className={`link ${pathname === href ? "active" : ""}`}
            >
              <div
                className="hover-el"
                style={{ justifyContent: isOpen ? "initial" : "center" }}
              >
                <div style={{ marginRight: isOpen ? 24 : "auto" }}>{elm}</div>
                <div style={{ opacity: isOpen ? 1 : 0 }}>
                  <span>{text}</span>
                </div>
                <span className="hz"></span>
              </div>
            </li>
          ))}
        </ul>
        <hr className="hr hr-big" />
        <ul>
          {sideBarMiddleItems.map(({ text, href, elm }) => (
            <li
              key={href}
              onClick={() => router.push(href)}
              className={`link ${pathname === href ? "active" : ""}`}
            >
              <div
                className="hover-el"
                style={{ justifyContent: isOpen ? "initial" : "center" }}
              >
                <div style={{ marginRight: isOpen ? 24 : "auto" }}>{elm}</div>
                <div style={{ opacity: isOpen ? 1 : 0 }}>
                  <span>{text}</span>
                </div>
                <span className="hz"></span>
              </div>
            </li>
          ))}
        </ul>
        <ul>
          {sideBarBottomItems.map(({ text, href, elm }) => (
            <li
              key={href}
              onClick={() => router.push(href)}
              className={`link ${pathname === href ? "active" : ""}`}
            >
              <div
                className="hover-el"
                style={{ justifyContent: isOpen ? "initial" : "center" }}
              >
                <div style={{ marginRight: isOpen ? 24 : "auto" }}>{elm}</div>
                <div style={{ opacity: isOpen ? 1 : 0 }}>
                  <span>{text}</span>
                </div>
                <span className="hz"></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
