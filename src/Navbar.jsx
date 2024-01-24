import { Link, NavLink } from 'react-router-dom';
import { useContext } from "react";
import '../src/guardian.css'

export const NavBar = () => {

  const userRole = localStorage.getItem("userRole")

  return (
    <>
      {/*<!-- ========== Topbar Start ========== -->*/}
      <div className="navbar-custom">
        <div className="topbar container-fluid">
          <div className="d-flex align-items-center gap-lg-2 gap-1">

            {/*<!-- Topbar Brand Logo -->*/}
            <div className="logo-topbar">
              {/*<!-- Logo light -->*/}
              <a href="index.html" className="logo-light">
                <span className="logo-lg">
                  <img src="../../guardian/logo.png" alt="logo" />
                </span>
                <span className="logo-sm">
                  <img src="../../guardian/logo-sm.png" alt="small logo" />
                </span>
              </a>

              {/*<!-- Logo Dark -->*/}
              <a href="index.html" className="logo-dark">
                <span className="logo-lg">
                  <img src="../../guardian/logo-dark.png" alt="dark logo" />
                </span>
                <span className="logo-sm">
                  <img src="../../guardian/logo-dark-sm.png" alt="small logo" />
                </span>
              </a>
            </div>

            {/*<!-- Sidebar Menu Toggle Button -->*/}
            <button className="button-toggle-menu">
              <i className="mdi mdi-menu"></i>
            </button>

            {/*<!-- Horizontal Menu Toggle Button -->*/}
            <button className="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            {/*<!-- Topbar Search Form -->*/}
            <div className="app-search dropdown d-none d-lg-block">
              <form>
                <div className="input-group">
                  <input type="search" className="form-control dropdown-toggle" placeholder="Buscar..." id="top-search" />
                  <span className="mdi mdi-magnify search-icon"></span>
                  <button className="input-group-text btn btn-primary" type="submit">Buscar</button>
                </div>
              </form>

              <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                {/*<!-- item-->*/}
                <div className="dropdown-header noti-title">
                  <h5 className="text-overflow mb-2">Encontrado <span className="text-danger">17</span> resultados</h5>
                </div>

                {/*<!-- item-->*/}
                <a href="#" className="dropdown-item notify-item">
                  <i className="uil-notes font-16 me-1"></i>
                  <span>Analytics Report</span>
                </a>

                {/*<!-- item-->*/}
                <a href="#" className="dropdown-item notify-item">
                  <i className="uil-life-ring font-16 me-1"></i>
                  <span>How can I help you?</span>
                </a>

                {/*<!-- item-->*/}
                <a href="#" className="dropdown-item notify-item">
                  <i className="uil-cog font-16 me-1"></i>
                  <span>User profile settings</span>
                </a>

                {/*<!-- item-->*/}
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                </div>

                <div className="notification-list">
                  {/*<!-- item-->*/}
                  <a href="#" className="dropdown-item notify-item">
                    <div className="d-flex">
                      <img className="d-flex me-2 rounded-circle" src="../../guardian/avatar-2.jpg" alt="Generic placeholder image" height="32" />
                      <div className="w-100">
                        <h5 className="m-0 font-14">Erwin Brown</h5>
                        <span className="font-12 mb-0">UI Designer</span>
                      </div>
                    </div>
                  </a>

                  {/*<!-- item-->*/}
                  <a href="#" className="dropdown-item notify-item">
                    <div className="d-flex">
                      <img className="d-flex me-2 rounded-circle" src="../../guardian/avatar-5.jpg" alt="Generic placeholder image" height="32" />
                      <div className="w-100">
                        <h5 className="m-0 font-14">Jacob Deo</h5>
                        <span className="font-12 mb-0">Developer</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ul className="topbar-menu d-flex align-items-center gap-3">
            <li className="dropdown d-lg-none">
              <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false">
                <i className="ri-search-line font-22"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                <form className="p-3">
                  <input type="search" className="form-control" placeholder="Search ..." aria-label="Recipient&#39;s username" />
                </form>
              </div>
            </li>

            <li className="dropdown">
              <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false">
                <img src="../../guardian/colombia.png" alt="user-image" className="me-0 me-sm-1" height="12" />
                <span className="align-middle d-none d-lg-inline-block">Español</span>
                <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated">

                {/*<!-- item-->*/}
                <a href="#" className="dropdown-item">
                  <img src="../../guardian/us.jpg" alt="user-image" className="me-1" height="12" />
                  <span className="align-middle">Inglés</span>
                </a>

                {/*<!-- item-->*/}
                <a href="#" className="dropdown-item">
                  <img src="../../guardian/germany.jpg" alt="user-image" className="me-1" height="12" />
                  <span className="align-middle">Alemán</span>
                </a>

                {/*<!-- item-->*/}
                <a href="#" className="dropdown-item">
                  <img src="../../guardian/italy.jpg" alt="user-image" className="me-1" height="12" />
                  <span className="align-middle">Italino</span>
                </a>

                {/*<!-- item-->*/}
                <a href="#" className="dropdown-item">
                  <img src="../../guardian/russia.jpg" alt="user-image" className="me-1" height="12" />
                  <span className="align-middle">Ruso</span>
                </a>
              </div>
            </li>

            <li className="dropdown notification-list">
              <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false">
                <i className="ri-notification-3-line font-22"></i>
                <span className="noti-icon-badge"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0 font-16 fw-semibold"> Notificación</h6>
                    </div>
                    <div className="col-auto">
                      <a href="#" className="text-dark text-decoration-underline">
                        <small>Borrar todo</small>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="px-2 style01" data-simplebar="init">
                  <div className="simplebar-wrapper style02">
                    <div className="simplebar-height-auto-observer-wrapper">
                      <div className="simplebar-height-auto-observer"></div>
                    </div>

                    <div className="simplebar-mask">
                      <div className="simplebar-offset style03">
                        <div className="simplebar-content-wrapper style04" tabIndex="0" role="region" aria-label="scrollable content">
                          <div className="simplebar-content style05">

                            <h5 className="text-muted font-13 fw-normal mt-2">Today</h5>

                            {/*<!-- item-->*/}
                            <a href="#" className="dropdown-item p-0 notify-item card unread-noti shadow-none mb-2">
                              <div className="card-body">
                                <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                    <div className="notify-icon bg-primary">
                                      <i className="mdi mdi-comment-account-outline"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 text-truncate ms-2">
                                    <h5 className="noti-item-title fw-semibold font-14">Datacorp <small className="fw-normal text-muted ms-1">1 min ago</small></h5>
                                    <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                  </div>
                                </div>
                              </div>
                            </a>

                            {/*<!-- item-->*/}
                            <a href="#" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                              <div className="card-body">
                                <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                    <div className="notify-icon bg-info">
                                      <i className="mdi mdi-account-plus"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 text-truncate ms-2">
                                    <h5 className="noti-item-title fw-semibold font-14">Admin <small className="fw-normal text-muted ms-1">1 hours ago</small></h5>
                                    <small className="noti-item-subtitle text-muted">New user registered</small>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <h5 className="text-muted font-13 fw-normal mt-0">Yesterday</h5>

                            {/*<!-- item-->*/}
                            <a href="#" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                              <div className="card-body">
                                <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                    <div className="notify-icon">
                                      <img src="../../guardian/avatar-2.jpg" className="img-fluid rounded-circle" alt="" />
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 text-truncate ms-2">
                                    <h5 className="noti-item-title fw-semibold font-14">Cristina Pride <small className="fw-normal text-muted ms-1">1 day ago</small></h5>
                                    <small className="noti-item-subtitle text-muted">Hi, How are you? What about our next meeting</small>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <h5 className="text-muted font-13 fw-normal mt-0">30 Dec 2021</h5>

                            {/*<!-- item-->*/}
                            <a href="#" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                              <div className="card-body">
                                <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                    <div className="notify-icon bg-primary">
                                      <i className="mdi mdi-comment-account-outline"></i>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 text-truncate ms-2">
                                    <h5 className="noti-item-title fw-semibold font-14">Datacorp</h5>
                                    <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                  </div>
                                </div>
                              </div>
                            </a>

                            {/*<!-- item-->*/}
                            <a href="#" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                              <div className="card-body">
                                <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0">
                                    <div className="notify-icon">
                                      <img src="../../guardian/avatar-4.jpg" className="img-fluid rounded-circle" alt="" />
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 text-truncate ms-2">
                                    <h5 className="noti-item-title fw-semibold font-14">Karen Robinson</h5>
                                    <small className="noti-item-subtitle text-muted">Wow ! this admin looks good and awesome design</small>
                                  </div>
                                </div>
                              </div>
                            </a>

                            <div className="text-center">
                              <i className="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="simplebar-placeholder style06"></div>
                  </div>
                  <div className="simplebar-track simplebar-horizontal style07">
                    <div className="simplebar-scrollbar style08"></div>
                  </div>

                  <div className="simplebar-track simplebar-vertical style07">
                    <div className="simplebar-scrollbar style09"></div>
                  </div>
                </div>

                {/*<!-- All-->*/}
                <a href="#" className="dropdown-item text-center text-primary notify-item border-top py-2">
                  View All
                </a>

              </div>
            </li>

            <li className="dropdown d-none d-sm-inline-block">
              <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false">
                <i className="ri-apps-2-line font-22"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">

                <div className="p-2">
                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="index.html#">
                        <img src="../../guardian/slack.png" alt="slack" />
                        <span>Slack</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="index.html#">
                        <img src="../../guardian/github.png" alt="Github" />
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="index.html#">
                        <img src="../../guardian/dribbble.png" alt="dribbble" />
                        <span>Dribbble</span>
                      </a>
                    </div>
                  </div>

                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="index.html#">
                        <img src="../../guardian/bitbucket.png" alt="bitbucket" />
                        <span>Bitbucket</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="index.html#">
                        <img src="../../guardian/dropbox.png" alt="dropbox" />
                        <span>Dropbox</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="index.html#">
                        <img src="../../guardian/g-suite.png" alt="G Suite" />
                        <span>G Suite</span>
                      </a>
                    </div>
                  </div> {/*<!-- end row-->*/}
                </div>

              </div>
            </li>

            <li className="d-none d-sm-inline-block">
              <a className="nav-link" data-bs-toggle="offcanvas" href="index.html#theme-settings-offcanvas">
                <i className="ri-settings-3-line font-22"></i>
              </a>
            </li>

            <li className="d-none d-sm-inline-block">
              <div className="nav-link" id="light-dark-mode" data-bs-toggle="tooltip" data-bs-placement="left" aria-label="Theme Mode" data-bs-original-title="Theme Mode">
                <i className="ri-moon-line font-22"></i>
              </div>
            </li>


            <li className="d-none d-md-inline-block">
              <a className="nav-link" href="index.html" data-toggle="fullscreen">
                <i className="ri-fullscreen-line font-22"></i>
              </a>
            </li>

            <li className="dropdown">
              <a className="nav-link dropdown-toggle arrow-none nav-user px-2" data-bs-toggle="dropdown" href="index.html#" role="button" aria-haspopup="false" aria-expanded="false">
                <span className="account-user-avatar">
                  <img src="../../guardian/avatar-1.jpg" alt="user-image" width="32" className="rounded-circle" />
                </span>
                <span className="d-lg-flex flex-column gap-1 d-none">
                  <h5 className="my-0">{login.user?.username}</h5>
                  <h6 className="my-0 fw-normal">
                    Administrador
                    {/* {userRole && userRole == 3 && "Clasificador"}
                    {userRole && userRole == 5 && "Repartidor"}
                    {userRole && userRole == 7 && "Proyector"}
                    {userRole && userRole == 8 && "Revisor"}
                    {userRole && userRole == 9 && "Firmante"}
                    {userRole && userRole == 10 && "Notificador"} */}
                  </h6>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                {/*<!-- item-->*/}
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Bienvenido !</h6>
                </div>

                {/*<!-- item-->*/}
                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-account-circle me-1"></i>
                  <span>Mi Cuenta</span>
                </a>

                {/*<!-- item-->*/}
                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-account-edit me-1"></i>
                  <span>Configuración</span>
                </a>

                {/*<!-- item-->*/}
                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-lifebuoy me-1"></i>
                  <span>Soporte</span>
                </a>

                {/*<!-- item-->*/}
                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-lock-outline me-1"></i>
                  <span>Lock Screen</span>
                </a>

                {/*<!-- item-->*/}
                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-logout me-1"></i>
                  <span onClick={handlerLogout}>Cerrar Sesión</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- ========== Topbar End ========== -->*/}

      {/*<!-- ========== Left Sidebar Start ========== -->*/}
      <div className="leftside-menu menuitem-active">

        {/*<!-- Brand Logo Light -->*/}
        <a href="index.html" className="logo logo-light">
          <span className="logo-lg">
            <img src="../../guardian/logo.png" alt="logo" />
          </span>
          <span className="logo-sm">
            <img src="../../guardian/logo-sm.png" alt="small logo" />
          </span>
        </a>

        {/*<!-- Brand Logo Dark -->*/}
        <a href="index.html" className="logo logo-dark">
          <span className="logo-lg">
            <img src="../../guardian/logo-dark.png" alt="dark logo" />
          </span>
          <span className="logo-sm">
            <img src="../../guardian/logo-dark-sm.png" alt="small logo" />
          </span>
        </a>

        {/*<!-- Sidebar Hover Menu Toggle Button -->*/}
        <div className="button-sm-hover" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Show Full Sidebar" data-bs-original-title="Show Full Sidebar">
          <i className="ri-checkbox-blank-circle-line align-middle"></i>
        </div>

        {/*<!-- Full Sidebar Menu Close Button -->*/}
        <div className="button-close-fullsidebar">
          <i className="ri-close-fill align-middle"></i>
        </div>

        {/*<!-- Sidebar -left -->*/}
        <div className="h-100 show" id="leftside-menu-container" data-simplebar="init">
          <div className="simplebar-wrapper style10">
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>

            <div className="simplebar-mask">
              <div className="simplebar-offset style11">
                <div className="simplebar-content-wrapper style12" tabIndex="0" role="region" aria-label="scrollable content">
                  <div className="simplebar-content style13">
                    {/*<!-- Leftbar User -->*/}
                    <div className="leftbar-user">
                      <a href="pages-profile.html">
                        <img src="../../guardian/avatar-1.jpg" alt="user-image" height="42" className="rounded-circle shadow-sm" />
                        <span className="leftbar-user-name mt-2">Dominic Keller</span>
                      </a>
                    </div>

                    {/*<!--- Sidemenu -->*/}
                    <ul className="side-nav">
                      <li className="side-nav-title">Guardian</li>
                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="index.html#sidebarAdministracion" aria-expanded="false" aria-controls="sidebarAdministracion" className="side-nav-link">
                          <i className="uil-store"></i>
                          <span> Administración </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarAdministracion">
                          <ul className="side-nav-second-level">
                            <li>
                              <NavLink to="/administracion/usuario">Usuarios</NavLink>
                            </li>
                            <li>
                              <NavLink to="/administracion/perfil">Perfiles</NavLink>
                            </li>
                            <li>
                              <NavLink to="/administracion/menu">Menú</NavLink>
                            </li>
                            <li>
                              <NavLink to="/seguridad/auditoria">Auditoría</NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="index.html#sidebarFlujoTrabajo" aria-expanded="false" aria-controls="sidebarFlujoTrabajo" className="side-nav-link">
                          <i className="uil-store"></i>
                          <span> Flujo de Trabajo </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarFlujoTrabajo">
                          <ul className="side-nav-second-level">
                            <li>
                              <NavLink to="/create">Crear Nuevo Flujo de Trabajo</NavLink>
                            </li>
                            <li>
                              <NavLink to="/check">Check</NavLink>
                            </li>
                            <li>
                              <NavLink to="/list">Mis Tareas</NavLink>
                            </li>
                            <li>
                              {/**<NavLink to="/busqueda">Busqueda</NavLink>*/}
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="index.html#sidebarConfiguracion" aria-expanded="false" aria-controls="sidebarConfiguracion" className="side-nav-link">
                          <i className="uil-store"></i>
                          <span> Configuración </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarConfiguracion">
                          <ul className="side-nav-second-level">
                            <li>
                              <NavLink to="/configuracion/base-datos">Base de Datos</NavLink>
                            </li>
                            <li>
                              <NavLink to="/configuracion/cuenta-correo">Cuenta Correo </NavLink>
                            </li>
                            <li>
                              <NavLink to="/configuracion/ftp">FTP</NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="index.html#sidebarParametrizacion" aria-expanded="false" aria-controls="sidebarParametrizacion" className="side-nav-link">
                          <i className="uil-store"></i>
                          <span> Parametrización </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarParametrizacion">
                          <ul className="side-nav-second-level">
                            <li>
                              <NavLink to="/parametrizacion/departamento">Departamento</NavLink>
                            </li>
                            <li>
                              <NavLink to="/parametrizacion/municipio">Municipio</NavLink>
                            </li>
                            <li>
                              <NavLink to="/parametrizacion/pais">Pais</NavLink>
                            </li>
                            <li>
                              <NavLink to="/parametrizacion/moneda">Moneda</NavLink>
                            </li>
                            <li>
                              <NavLink to="/parametrizacion/tipo-identificacion">Tipo de Identificación</NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="index.html#sidebarSeguridad" aria-expanded="false" aria-controls="sidebarSeguridad" className="side-nav-link">
                          <i className="uil-store"></i>
                          <span> Seguridad </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarSeguridad">
                          <ul className="side-nav-second-level">
                            <li>
                              <NavLink to="/seguridad/auditoria">Auditoria</NavLink>
                            </li>
                            <li>
                              <NavLink to="/seguridad/recuperar-contrasena">Recuperar Contraseña</NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="side-nav-item">
                        <a data-bs-toggle="collapse" href="index.html#sidebarSoporte" aria-expanded="false" aria-controls="sidebarParametrizacion" className="side-nav-link">
                          <i className="uil-store"></i>
                          <span> Soporte </span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="collapse" id="sidebarSoporte">
                          <ul className="side-nav-second-level">
                            <li>
                              <NavLink to="/soporte">Abrir ticket</NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    {/*<!--- End Sidemenu -->*/}

                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="simplebar-placeholder style14"></div>
          </div>

          <div className="simplebar-track simplebar-horizontal style07">
            <div className="simplebar-scrollbar style08"></div>
          </div>

          <div className="simplebar-track simplebar-vertical style15">
            <div className="simplebar-scrollbar style16"></div>
          </div>
        </div>
      </div>
      {/*<!-- ========== Left Sidebar End ========== -->*/}
    </>
  )
}

export default NavBar;
