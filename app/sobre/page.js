export default function Sobre() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre o Desenvolvedor</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-semibold">Bruno Rufino da Costa</h2>
            <p className="text-gray-600">Desenvolvedor Full Stack</p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Olá! Sou um desenvolvedor apaixonado por tecnologia e programação. Este aplicativo foi desenvolvido como parte de um projeto para demonstrar minhas habilidades em desenvolvimento web utilizando Next.js e Tailwind CSS.
          </p>
          
          <p className="text-lg mb-4">
            Com experiência em desenvolvimento front-end e back-end, busco sempre criar aplicações que sejam não apenas funcionais, mas também intuitivas e agradáveis de usar.
          </p>
          
          <p className="text-lg">
            Este conversor foi desenvolvido com o objetivo de fornecer uma ferramenta simples e eficiente para conversão de diferentes tipos de unidades, utilizando tecnologias modernas e boas práticas de desenvolvimento.
          </p>
        </div>
      </div>
    </div>
  )
} 