

const Hero = () => {
  return (
    <div className="bg-[url('../src/assets/hero.png')] h-screen bg-fixed bg-cover flex flex-col gap-4 justify-center items-start
    p-12">
            <h1 className="text-4xl font-medium">Trends That Speak <br /> Styles That Last</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Eligendi asperiores beatae, deserunt tenetur placeat 
            </p>
            <button className="bg-black px-6 py-2 text-white cursor-pointer">Learn More</button>
    </div>
  )
}

export default Hero