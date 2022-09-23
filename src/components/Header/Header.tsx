import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { GitHub } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./Header.sass";

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header>
      <nav>
        <Link to="/" className="nav-brand">
          N
        </Link>
        <Link to="/overview">Overview</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <div className="responsive" data-opened={menuOpened}>
          <Link to="/overview" onClick={() => setMenuOpened(false)}>
            Overview
          </Link>
          <Link to="/skills" onClick={() => setMenuOpened(false)}>
            Skills
          </Link>
          <Link to="/projects" onClick={() => setMenuOpened(false)}>
            Projects
          </Link>
          <Link to="/contact" onClick={() => setMenuOpened(false)}>
            Contact
          </Link>
        </div>
      </nav>
      <a
        href="https://github.com/nylestroke?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="button"
      >
        <GitHub />
        <span>Repositories</span>
      </a>
      <div className="mobile-btn">
        <span
          onClick={() => setMenuOpened(!menuOpened)}
          data-opened={!menuOpened}
        >
          <MenuIcon />
        </span>
        <span
          onClick={() => setMenuOpened(!menuOpened)}
          data-opened={menuOpened}
        >
          <CloseIcon />
        </span>
      </div>
    </header>
  );
};
