import React from 'react'
// "img/blog-1.jpg"
import BImg1  from '../img/blog-1.png'
import BImg2  from '../img/blog-2.png'
import BImg3  from '../img/blog-3.png'
import UImg1  from '../img/user.jpg'

const BlogDetail = () => {
    return (
        <>

            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-white mb-md-4">Blog Detail</h1>
                            <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                            <a href="/" className="btn btn-secondary py-md-3 px-md-5">Blog Detail</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}

            {/* <!-- Blog Start --> */}
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-8">
                        {/* <!-- Blog Detail Start --> */}
                        <div className="mb-5">
                            <div className="row g-5 mb-5">
                                <div className="col-md-6">
                                    <img className="img-fluid w-100" src={BImg1} alt="" />
                                </div>
                                <div className="col-md-6">
                                    <img className="img-fluid w-100" src={BImg2} alt="" />
                                </div>
                            </div>
                            <h1 className="mb-4">Diam dolor est labore duo ipsum clita sed et lorem tempor duo</h1>
                            <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                                magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                                amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                                sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                                aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                                sit stet no diam kasd vero.</p>
                            <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                                vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                                nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                                ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                                clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                                justo dolore sit invidunt.</p>
                            <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.</p>
                        </div>
                        {/* <!-- Blog Detail End --> */}

                        {/* <!-- Comment List Start --> */}
                        <div className="mb-5">
                            <h2 className="mb-4">3 Comments</h2>
                            <div className="d-flex mb-4">
                                <img src={UImg1} className="img-fluid" style={{ width: "45px", height: "45px" }} />
                                <div className="ps-3">
                                    <h6><a href="/">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                                    <button className="btn btn-sm btn-primary">Reply</button>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <img src={UImg1} className="img-fluid" style={{ width: "45px", height: "45px" }}
                                />
                                <div className="ps-3">
                                    <h6><a href="/">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                                    <button className="btn btn-sm btn-primary">Reply</button>
                                </div>
                            </div>
                            <div className="d-flex ms-5 mb-4">
                                <img src={UImg1} className="img-fluid" style={{ width: "45px", height: "45px" }} />
                                <div className="ps-3">
                                    <h6><a href="/">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                                    <button className="btn btn-sm btn-primary">Reply</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Comment List End --> */}

                        {/* <!-- Comment Form Start --> */}
                        <div className="bg-primary p-5">
                            <h2 className="text-white mb-4">Leave a comment</h2>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control bg-white border-0" placeholder="Your Name" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="email" className="form-control bg-white border-0" placeholder="Your Email" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control bg-white border-0" placeholder="Website" style={{ height: "55px" }} />
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control bg-white border-0" rows="5" placeholder="Comment"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-secondary w-100 py-3" type="submit">Leave Your Comment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <!-- Comment Form End --> */}
                    </div>

                    {/* <!-- Sidebar Start --> */}
                    <div className="col-lg-4">
                        {/* <!-- Search Form Start --> */}
                        <div className="mb-5">
                            <div className="input-group">
                                <input type="text" className="form-control p-3" placeholder="Keyword" />
                                <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                        {/* <!-- Search Form End --> */}

                        {/* <!-- Category Start --> */}
                        <div className="mb-5">
                            <h2 className="mb-4">Categories</h2>
                            <div className="d-flex flex-column justify-content-start bg-primary p-4">
                                <a className="fs-5 fw-bold text-white mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Web Design</a>
                                <a className="fs-5 fw-bold text-white mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Web Development</a>
                                <a className="fs-5 fw-bold text-white mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Web Development</a>
                                <a className="fs-5 fw-bold text-white mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Keyword Research</a>
                                <a className="fs-5 fw-bold text-white" href="#"><i className="bi bi-arrow-right me-2"></i>Email Marketing</a>
                            </div>
                        </div>
                        {/* <!-- Category End --> */}

                        {/* <!-- Recent Post Start --> */}
                        <div className="mb-5">
                            <h2 className="mb-4">Recent Post</h2>
                            <div className="bg-primary p-4">
                                <div className="d-flex overflow-hidden mb-3">
                                    <img className="img-fluid flex-shrink-0" src={BImg1} style={{height:"140px" , width: "75px" }} alt="" />
                                    <a href="/" className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Lorem ipsum dolor sit amet elit
                                    </a>
                                </div>
                                <div className="d-flex overflow-hidden mb-3">
                                    <img className="img-fluid flex-shrink-0" src={BImg2} style={{height:"140px" , width: "75px" }} alt="" />
                                    <a href="/" className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Lorem ipsum dolor sit amet elit
                                    </a>
                                </div>
                                <div className="d-flex overflow-hidden mb-3">
                                    <img className="img-fluid flex-shrink-0" src={BImg3} style={{height:"140px" , width: "75px" }} alt="" />
                                    <a href="/" className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Lorem ipsum dolor sit amet elit
                                    </a>
                                </div>
                                <div className="d-flex overflow-hidden mb-3">
                                    <img className="img-fluid flex-shrink-0" src={BImg1} style={{height:"140px" , width: "75px" }} alt="" />
                                    <a href="/" className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Lorem ipsum dolor sit amet elit
                                    </a>
                                </div>
                                <div className="d-flex overflow-hidden">
                                    <img className="img-fluid flex-shrink-0" src={BImg2} style={{height:"140px" , width: "75px" }} alt="" />
                                    <a href="/" className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Lorem ipsum dolor sit amet elit
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Recent Post End --> */}

                        {/* <!-- Image Start --> */}
                        <div className="mb-5">
                            <img src={BImg2} alt="" className="img-fluid rounded" />
                        </div>
                        {/* <!-- Image End --> */}

                        {/* <!-- Tags Start --> */}
                        <div className="mb-5">
                            <h2 className="mb-4">Tag Cloud</h2>
                            <div className="d-flex flex-wrap m-n1">
                                <a href="/" className="btn btn-primary m-1">Design</a>
                                <a href="/" className="btn btn-primary m-1">Development</a>
                                <a href="/" className="btn btn-primary m-1">Marketing</a>
                                <a href="/" className="btn btn-primary m-1">SEO</a>
                                <a href="/" className="btn btn-primary m-1">Writing</a>
                                <a href="/" className="btn btn-primary m-1">Consulting</a>
                                <a href="/" className="btn btn-primary m-1">Design</a>
                                <a href="/" className="btn btn-primary m-1">Development</a>
                                <a href="/" className="btn btn-primary m-1">Marketing</a>
                                <a href="/" className="btn btn-primary m-1">SEO</a>
                                <a href="/" className="btn btn-primary m-1">Writing</a>
                                <a href="/" className="btn btn-primary m-1">Consulting</a>
                            </div>
                        </div>
                        {/* <!-- Tags End --> */}

                        {/* <!-- Plain Text Start --> */}
                        <div>
                            <h2 className="mb-4">Plain Text</h2>
                            <div className="bg-primary text-center text-white" style={{ padding: "30px" }}>
                                <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                                <a href="/" className="btn btn-secondary py-2 px-4">Read More</a>
                            </div>
                        </div>
                        {/* <!-- Plain Text End --> */}
                    </div>
                    {/* <!-- Sidebar End --> */}
                </div>
            </div>
            {/* <!-- Blog End --> */}
        </>

    )
}
export default BlogDetail;