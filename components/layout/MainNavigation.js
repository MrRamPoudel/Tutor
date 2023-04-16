import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import withAuth from "../auth/withAuth";
import Link from 'next/link';

const MainNavigation = (props) => {
      const [show, setShow] = useState(false);
      const [profile, setProfile] = useState(false);
      const [menu, setMenu] = useState(false);
      const [menu1, setMenu1] = useState(false);
      const [menu2, setMenu2] = useState(false);
      const [menu3, setMenu3] = useState(false);
      const { data: session, status } = useSession();
      const loading = status === "loading";
      
      if (loading) {
        return <div>Loading...</div>;
      }

      const handleSignOut = () => {
        signOut();
      };

      return (
          <>
              <div className="w-full h-full bg-gray-200">
                  <div className="flex flex-no-wrap">
                      {/* Sidebar starts */}
                      <div className="fixed top-0 lg:relative w-64 min-h-screen shadow bg-gray-100 hidden lg:block">
                        <Link href={`/`}>
                          <div className="mt-5 w-full flex flex-col justify-center items-center px-8 text-slate-950">
                            <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                                fill="currentColor"
                              />
                            </svg>
                            <p className="mt-2 text-2xl leading-6 ">AcadConnect</p>
                          </div>
                        </Link>
                          <ul aria-orientation="vertical" className=" py-6">
                              <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                              <Link href={`/`}>
                                  <div className="flex items-center">
                                      <div>
                                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                              <path stroke="none" d="M0 0h24v24H0z" />
                                              <rect x={4} y={4} width={6} height={6} rx={1} />
                                              <rect x={14} y={4} width={6} height={6} rx={1} />
                                              <rect x={4} y={14} width={6} height={6} rx={1} />
                                              <rect x={14} y={14} width={6} height={6} rx={1} />
                                          </svg>
                                      </div>
                                      <span className="ml-2">Tutor List</span>
                                  </div>
                                </Link>
                              </li>
                              <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                  <div className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" />
                                          <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                      </svg>
                                      <span className="ml-2">Academic Tools</span>
                                  </div>
                              </li>
                              <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                  <div className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" />
                                          <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                          <circle cx={12} cy={12} r={9} />
                                      </svg>
                                      <span className="ml-2">Direction</span>
                                  </div>
                              </li>
                              <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <Link href={'/chatGPT'}>
                                  <div className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" />
                                          <polyline points="7 8 3 12 7 16" />
                                          <polyline points="17 8 21 12 17 16" />
                                          <line x1={14} y1={4} x2={10} y2={20} />
                                      </svg>
                                      <span className="ml-2">ChatGPT</span>
                                  </div>
                                </Link>
                              </li>
                          </ul>
                      </div>
                      {/*Mobile responsive sidebar*/}
                      <div className={show ? "w-full h-full fixed top-0 z-40  transform  translate-x-0 " : "   w-full h-full fixed top-0 z-40  transform -translate-x-full"} id="mobile-nav">
                          <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
                          <div className="z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                              <div className="flex flex-col justify-between h-full w-full">
                                  <div>
                                      <div className="flex items-center justify-between px-8">
                                        <Link href={`/`}>
                                          <div className="mt-5 w-full flex flex-col justify-center items-center text-slate-950">
                                            <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path
                                                d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                                                fill="currentColor"
                                              />
                                            </svg>
                                            <p className="mt-2 text-2xl leading-6 ">AcadConnect</p>
                                          </div>
                                        </Link>
                                          <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z" />
                                                  <line x1={18} y1={6} x2={6} y2={18} />
                                                  <line x1={6} y1={6} x2={18} y2={18} />
                                              </svg>
                                          </div>
                                      </div>
                                      <ul aria-orientation="vertical" className=" py-6">
                                          <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <Link href={`/`}>
                                              <div className="flex items-center">
                                                  <div className="w-6 h-6 md:w-8 md:h-8">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                          <path stroke="none" d="M0 0h24v24H0z" />
                                                          <rect x={4} y={4} width={6} height={6} rx={1} />
                                                          <rect x={14} y={4} width={6} height={6} rx={1} />
                                                          <rect x={4} y={14} width={6} height={6} rx={1} />
                                                          <rect x={14} y={14} width={6} height={6} rx={1} />
                                                      </svg>
                                                  </div>
                                                  <span className="ml-2 xl:text-base md:text-2xl text-base">Tutor List</span>
                                              </div>
                                            </Link>
                                          </li>
                                          <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                              <div className="flex items-center">
                                                  <div className="w-6 h-6 md:w-8 md:h-8">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                          <path stroke="none" d="M0 0h24v24H0z" />
                                                          <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                      </svg>
                                                  </div>
                                                  <span className="ml-2 xl:text-base md:text-2xl text-base">Academic Tools</span>
                                              </div>
                                          </li>
                                          <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                              <div className="flex items-center">
                                                  <div className="w-6 h-6 md:w-8 md:h-8">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                          <path stroke="none" d="M0 0h24v24H0z" />
                                                          <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                          <circle cx={12} cy={12} r={9} />
                                                      </svg>
                                                  </div>
                                                  <span className="ml-2 xl:text-base md:text-2xl text-base">Direction</span>
                                              </div>
                                          </li>
                                          <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <Link href={`/chatGPT`}>  
                                              <div className="flex items-center">
                                                  <div className="w-6 h-6 md:w-8 md:h-8">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                          <path stroke="none" d="M0 0h24v24H0z" />
                                                          <polyline points="7 8 3 12 7 16" />
                                                          <polyline points="17 8 21 12 17 16" />
                                                          <line x1={14} y1={4} x2={10} y2={20} />
                                                      </svg>
                                                  </div>
                                                  <span className="ml-2 xl:text-base md:text-2xl text-base">ChatGPT</span>
                                              </div>
                                            </Link>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="w-full">
                                      <div className="flex justify-center mb-4 w-full px-6">
                                          <div className="relative w-full">
                                              <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                      <path stroke="none" d="M0 0h24v24H0z" />
                                                      <circle cx={10} cy={10} r={7} />
                                                      <line x1={21} y1={21} x2={15} y2={15} />
                                                  </svg>
                                              </div>
                                              <input className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2" type="text" placeholder="Search" />
                                          </div>
                                      </div>
                                      <div className="border-t border-gray-300">
                                          <div className="w-full flex items-center justify-between px-6 pt-1">
                                              <div className="flex items-center">
                                                  <img alt="profile-pic" src="https://friconix.com/png/fi-cnluxx-anonymous-user-circle.png" className="w-8 h-8 rounded-md" />
                                                  <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">{session.user.name}</p>
                                              </div>
                                              <ul className="flex">
                                                  <li className="cursor-pointer text-white pt-5 pb-3">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                          <path stroke="none" d="M0 0h24v24H0z" />
                                                          <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                          <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                                      </svg>
                                                  </li>
                                                  <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1} stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                          <path stroke="none" d="M0 0h24v24H0z" />
                                                          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                      </svg>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/*Mobile responsive sidebar*/}
                      {/* Sidebar ends */}
                      <div className="w-full">
                          {/* Navigation starts */}
                          <nav className="h-16 sticky top-0 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
                              <div className="hidden lg:flex w-full pr-6">
                                  <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                                      <div className="relative w-full">
                                          <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z" />
                                                  <circle cx={10} cy={10} r={7} />
                                                  <line x1={21} y1={21} x2={15} y2={15} />
                                              </svg>
                                          </div>
                                          <input className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2" type="text" placeholder="Search" />
                                      </div>
                                  </div>
                                  <div className="w-1/2 hidden lg:flex">
                                      <div className="w-full flex items-center pl-8 justify-end">
                                          <div className="h-full w-20 flex items-center justify-center border-r border-l">
                                           
                                              <div className="relative cursor-pointer text-gray-600">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                      <path stroke="none" d="M0 0h24v24H0z" />
                                                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                  </svg>
                                                  <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                                              </div>
                                            
                                          </div>
                                          <Link href={`/chat/${session.user.id}`}>
                                          <div className="h-full w-20 flex items-center justify-center border-r mr-4 cursor-pointer text-gray-600">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                  <path stroke="none" d="M0 0h24v24H0z" />
                                                  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                              </svg>
                                          </div>
                                          </Link>
                                          <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                                              <div className="rounded-full">
                                                  {profile ? (
                                                      <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                                                          <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                                              <div className="flex items-center">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                      <path stroke="none" d="M0 0h24v24H0z" />
                                                                      <circle cx={12} cy={7} r={4} />
                                                                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                                  </svg>
                                                                  <span className="text-sm ml-2">My Profile</span>
                                                              </div>
                                                          </li>
                                                          <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                                                              <div className="flex items-center">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                      <path stroke="none" d="M0 0h24v24H0z" />
                                                                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                                                      <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                                                  </svg>
                                                                  <button onClick={handleSignOut} className="text-sm ml-2">Sign out</button>
                                                              </div>
                                                          </li>
                                                      </ul>
                                                  ) : (
                                                      ""
                                                  )}
                                                  <div className="relative">
                                                      <img className="rounded-full h-10 w-10 object-cover" src="https://friconix.com/png/fi-cnluxx-anonymous-user-circle.png" alt="avatar" />
                                                      <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                                                  </div>
                                              </div>
                                              <div>
                                                <p className="text-gray-800 text-sm mx-3">{session.user.name}</p>
                                                <p className="text-gray-600 text-xs mx-3">{session.user.role}</p>
                                              </div>
                                              <div className="cursor-pointer text-gray-600">
                                                  <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                      <path stroke="none" d="M0 0h24v24H0z" />
                                                      <polyline points="6 9 12 15 18 9" />
                                                  </svg>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                                  {show ? (
                                      " "
                                  ) : (
                                      <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" />
                                          <line x1={4} y1={8} x2={20} y2={8} />
                                          <line x1={4} y1={16} x2={20} y2={16} />
                                      </svg>
                                  )}
                              </div>
                          </nav>
                          {/* Navigation ends */}
                          <div className="container mx-auto py-10 px-6">
                            {props.children}
                          </div>
                      </div>
                  </div>
              </div>
          </>
      );
  }

export default withAuth(MainNavigation);
