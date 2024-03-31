import Image from "next/image";


function About() {
  return (
    <>
      {/* Use the imported image */}
      <Image src="/about.png" alt="About Image" width={500} height={500} />
    </>
  );
}

export default About;
