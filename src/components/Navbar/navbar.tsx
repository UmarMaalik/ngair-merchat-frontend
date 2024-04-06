import React from 'react'

export default function Navbar() {
	return (
		<>
		<div className="vobilet-navbar fixed-heade" id="headerMenuCollapse" style={{marginBottom: '-72px'}}>
					<div className="container">
						<div className="d-flex">
							
							<div className="d-flex order-lg-2 ml-auto">
								<div className="dropdown">
									<a href="#" className="nav-link pr-0 leading-none" data-toggle="dropdown" style={{color: '#fff',backgroundColor: '#fff'}}>
										<span className="avatar avatar-md brround" style={{backgroundImage: 'url(assets/images/faces/male/9.jpeg)'}}></span>
										<span className="ml-2 d-none d-lg-block">
											<span className="text-dark">Brandon</span>
										</span>
									</a>
									<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
										<a className="dropdown-item" href="c_profile.html">
											<i className="dropdown-icon mdi mdi-account-outline "></i> Profile
										</a>
										<a className="dropdown-item" href="#">
											<i className="dropdown-icon  mdi mdi-settings"></i> Settings
										</a>
										<a className="dropdown-item" href="#">
											<span className="float-right"><span className="badge badge-primary">6</span></span>
											<i className="dropdown-icon mdi  mdi-message-outline"></i> Inbox
										</a>
										{/* <a className="dropdown-item" href="#">
											<i className="dropdown-icon mdi mdi-comment-check-outline"></i> Message
										</a>  */}
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="#">
											<i className="dropdown-icon mdi mdi-compass-outline"></i> Need help?
										</a>
										<a className="dropdown-item" href="login.html">
											<i className="dropdown-icon mdi  mdi-logout-variant"></i> Sign out
										</a>
									</div>
								</div>
							</div>
							<a href="#" className="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
							<span className="header-toggler-icon"></span>
							</a>
						</div>
					</div>
				</div>
				<div className="vobilet-navbar fixed-heade" id="headerMenuCollapse" style={{marginBottom: '-72px'}}>
					<div className="container" style={{marginTop: '10px'}}>
						<ul className="nav">
						<li className="nav-item">
						
								<img src="https://ngair.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ba239389.png&w=750&q=75" className="header-brand-img" alt="Ngnair Logo" />
						
						
						</li>
						
						
							<li className="nav-item">
								<a className="nav-link active" href="index.html">
									<i className="fa fa-university"></i>
									<span>Dashboard</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="c_profile.html">
									<i className="fa fa-file-text"></i>
									<span>Reporting</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="widgets.html">
									<i className="fa fa-user-secret"></i>
									<span>Customers</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="catalog.html">
									<i className="fa fa-universal-access"></i>
									<span>Catalog</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="administration.html">
									<i className="fa fa-user"></i>
									<span>Admin</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="support.html">
									<i className="fa fa-user-plus"></i>
									<span>Support</span>
								</a>
							</li>
							{/* <li className="nav-item with-sub">
								<a className="nav-link active" href="#">
									<i className="fa fa-home"></i>
									<span>More</span>
								</a>
								<div className="sub-item">
									<ul>
										<li>
											<a href="index.html">Dashboard 1</a>
										</li>
										<li>
											<a href="index2.html">Dashboard 2</a>
										</li>
										<li>
											<a href="index3.html">Dashboard 3</a>
										</li>
										<li>
											<a href="index4.html">Dashboard 4</a>
										</li>
									</ul>
								</div>
							</li>  */}
							<li className="nav-item">
								<a className="nav-link" href="my_account.html">
									<i className="fa fa-users"></i>
									<span>Accounts</span>
								</a>
							</li>
							
						</ul>
					</div>

				</div>
		</>
	)
}
