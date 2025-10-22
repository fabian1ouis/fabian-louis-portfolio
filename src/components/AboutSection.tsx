import { motion } from 'motion/react';
import { Terminal, Code2, Smartphone, Pen } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Building responsive, accessible interfaces with React and modern web technologies',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Creating seamless mobile experiences with React Native',
    },
    {
      icon: Pen,
      title: 'Tech Writing',
      description: 'Sharing insights on tech, innovation, and the digital landscape in Kenya',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ margin: "-150px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">About</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-6">
            Transforming Ideas into Seamless Digital Experiences
          </h2>
          <div className="max-w-3xl space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a dedicated and creative developer who thrives on transforming ideas into seamless digital experiences. 
              With a strong focus on React.js and React Native, I specialize in crafting intuitive, responsive, and impactful 
              web and mobile applications that truly connect with users.
            </p>
            <p>
              I believe in building software that not only looks great but solves real-world problems. Every project is an 
              opportunity to create something meaningful that makes a difference in people's lives.
            </p>
            <p>
              When I'm not coding, I enjoy sharing insights on my blog — exploring topics around tech, innovation, and the 
              evolving digital landscape in Kenya. I'm passionate about contributing to the growing tech ecosystem in East Africa.
            </p>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ margin: "-80px" }}
            >
              <Card className="border-border hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ margin: "-100px" }}
          className="mt-16 p-8 border border-border rounded-lg bg-card"
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl text-primary/30 leading-none">"</div>
            <div className="space-y-4">
              <p className="text-lg text-foreground italic">
                Code is more than syntax — it's creativity in motion. I write code that developers enjoy reading 
                and users love experiencing.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-12 h-0.5 bg-primary" />
                <span>My development philosophy</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
