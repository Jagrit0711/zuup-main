import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User, Trash2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  role: "assistant" | "user";
  content: string;
  timestamp: Date;
}

const ZuupAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm Zuup AI Beta. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const generateResponse = async (userMessage: string) => {
    // Simulate AI thinking with predefined responses
    const responses = [
      "I understand your question. Let me help you with that.",
      "That's an interesting perspective. Here's what I think...",
      "Based on my analysis, I would suggest...",
      "Let me process that information and provide a helpful response.",
      "I can assist you with that. Here's my recommendation..."
    ];
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate a "smart" response based on user input
    let response = "";
    if (userMessage.toLowerCase().includes("hello") || userMessage.toLowerCase().includes("hi")) {
      response = "Hello! It's great to meet you. How can I help you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
      response = "I'm functioning well, thank you for asking! I'm here to assist you.";
    } else if (userMessage.toLowerCase().includes("help")) {
      response = "I'd be happy to help! I can assist with various tasks, answer questions, or engage in conversation. What specific assistance do you need?";
    } else {
      // Pick a random response for other queries
      response = responses[Math.floor(Math.random() * responses.length)] +
                " Based on your message: '" + userMessage + "', I would suggest exploring this topic further.";
    }
    
    return response;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      // Generate AI response
      const response = await generateResponse(input);
      
      // Add AI response
      const aiMessage: Message = {
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([{
      role: "assistant",
      content: "Hello! I'm Zuup AI Beta. How can I assist you today?",
      timestamp: new Date(),
    }]);
    toast({
      title: "Chat Cleared",
      description: "The conversation has been reset.",
    });
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-4 bg-gray-800 border-b border-gray-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-blue-400" />
              <h1 className="text-xl font-bold text-white">Zuup AI Beta</h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={clearChat}
              className="text-gray-400 hover:text-white"
            >
              <Trash2 className="w-5 h-5" />
            </Button>
          </div>

          <ScrollArea className="h-[600px] p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${
                    message.role === "assistant" ? "justify-start" : "justify-end"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "assistant"
                        ? "bg-gray-800 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs opacity-50 mt-1 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <Bot className="w-5 h-5" />
                  <span>Typing...</span>
                </motion.div>
              )}
            </div>
          </ScrollArea>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button type="submit" disabled={isTyping}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ZuupAI;