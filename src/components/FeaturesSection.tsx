import { motion } from 'motion/react';
import { Code2, Smartphone, GitBranch, Users, Terminal, Sparkles, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import catchUpFabScreenshot from 'figma:asset/ed1c7e83bf7b0462c92053c48f4ee03a38003bd5.png';
import youGuessedItScreenshot from 'figma:asset/dafa53a83a88a7ff2d3201d8a57b30867d15aa7c.png';

const FeaturesSection = () => {
  const features = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Crafting intuitive, responsive web applications with React and modern frontend technologies.',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile experiences using React Native with seamless UI components.',
      skills: ['React Native', 'NativeBase', 'React Query', 'Mobile UI'],
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Expert in Git workflows, collaborative development, and maintaining clean codebases.',
      skills: ['Git', 'GitHub', 'Code Review', 'CI/CD'],
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'Agile methodology practitioner with experience in sprint planning and team collaboration.',
      skills: ['Agile', 'Scrum', 'Team Collaboration', 'Planning'],
    },
    {
      icon: Sparkles,
      title: 'Modern Styling',
      description: 'Creating beautiful, maintainable designs with utility-first CSS frameworks and design systems.',
      skills: ['TailwindCSS', 'Responsive Design', 'UI/UX', 'Accessibility'],
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: 100, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Specialized in React and React Native development with a focus on creating seamless digital experiences that truly connect with users.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ margin: "-50px" }}
            >
              <Card className="h-full border-border bg-card hover:border-primary/50 transition-colors group">
                <CardContent className="p-6 space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {feature.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Current Projects Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ margin: "-100px" }}
          className="mt-16"
        >
          <h3 className="text-xl mb-6 text-center">Current Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Catch Up With Fab */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ margin: "-100px" }}
              whileHover={{ y: -8 }}
            >
              <Card className="border-border bg-card hover:border-primary/50 transition-colors overflow-hidden h-full">
                <CardContent className="p-0">
                  {/* Project Screenshot */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={catchUpFabScreenshot}
                      alt="Catch Up With Fab - Tech Blog Platform"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <span className="absolute top-4 right-4 text-xs px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground">
                      Active
                    </span>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <h4 className="text-lg">Catch Up With Fab</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A fully functional blog platform spotlighting Kenya's latest events, especially in the tech ecosystem — designed to keep readers in the loop and inspired.
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Blog</span>
                      <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Tech</span>
                      <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Kenya</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        asChild
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group"
                      >
                        <a href="https://catchupwithfab.lovable.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          View Site
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 border-border hover:border-primary/50 hover:text-primary"
                      >
                        <a href="https://github.com/fabian1ouis/catchupwithfab" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Kick It With Fab */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ margin: "-100px" }}
              whileHover={{ y: -8 }}
            >
              <Card className="border-border bg-card hover:border-primary/50 transition-colors overflow-hidden h-full">
                <CardContent className="p-0">
                  {/* Project Screenshot */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1573639615462-3a16eabd9390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmb290YmFsbCUyMGJsb2d8ZW58MXx8fHwxNzU5OTk5MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Kick It With Fab - Sports Blog"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <span className="absolute top-4 right-4 text-xs px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground">
                      Active
                    </span>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <h4 className="text-lg">Kick It With Fab</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A modern sports blog capturing the spirit of football in Kenya, featuring highlights, insights, and community engagement.
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Sports</span>
                      <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Football</span>
                      <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Community</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        asChild
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group"
                      >
                        <a href="https://kickitwithfab.bolt.host/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          View Site
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 border-border hover:border-primary/50 hover:text-primary"
                      >
                        <a href="https://github.com/fabianlouis/kickitwithfab" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* You Guessed It */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ margin: "-100px" }}
              whileHover={{ y: -8 }}
            >
              <Card className="border-border bg-card hover:border-primary/50 transition-colors overflow-hidden h-full">
                <CardContent className="p-0">
                  {/* Project Screenshot */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={youGuessedItScreenshot}
                      alt="You Guessed It - Number Guessing Game"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <span className="absolute top-4 right-4 text-xs px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground">
                      Active
                    </span>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <h4 className="text-lg">You Guessed It</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      An interactive number guessing game that challenges players to guess a random number between 1 and 100 with instant feedback.
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Game</span>
                      <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Interactive</span>
                      <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">JavaScript</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        asChild
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group"
                      >
                        <a href="https://fabian1ouis.github.io/youguessedit/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          View Site
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 border-border hover:border-primary/50 hover:text-primary"
                      >
                        <a href="https://github.com/fabian1ouis/youguessedit" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
