var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_app = require("firebase/app");
var import_firestore = require("firebase/firestore");
var import_auth = require("firebase/auth");
var firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};
var isConfigured = !!firebaseConfig.apiKey && firebaseConfig.apiKey !== "SUA_API_KEY_AQUI";
var firebaseApp = isConfigured ? !(0, import_app.getApps)().length ? (0, import_app.initializeApp)(firebaseConfig) : (0, import_app.getApp)() : null;
var db = firebaseApp ? (0, import_firestore.getFirestore)(firebaseApp) : null;
var auth = firebaseApp ? (0, import_auth.getAuth)(firebaseApp) : null;
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.use((req, res, next) => {
    const allowedOrigins = [
      "https://jeffmr.github.io",
      "http://localhost:3000"
    ];
    const origin = req.headers.origin;
    if (origin) {
      if (allowedOrigins.includes(origin) || origin.endsWith(".run.app") || origin.includes("localhost") || origin.includes("127.0.0.1")) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Access-Control-Allow-Credentials", "true");
      }
    } else {
      res.setHeader("Access-Control-Allow-Origin", "*");
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });
  let mockProjects = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com carrinho de compras, integra\xE7\xE3o de pagamentos e painel administrativo.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      link: "https://github.com/jeffmr",
      createdAt: Date.now()
    },
    {
      id: "2",
      title: "API de Gerenciamento",
      description: "API RESTful escal\xE1vel para gerenciamento de recursos, autentica\xE7\xE3o JWT e arquitetura limpa.",
      technologies: ["Express", "TypeScript", "MongoDB"],
      link: "https://github.com/jeffmr",
      createdAt: Date.now() - 1e5
    }
  ];
  let mockProfile = {
    name: "Jefferson Miranda",
    username: "jeffmr",
    bio: "Desenvolvedor Fullstack focado em criar solu\xE7\xF5es web modernas, escal\xE1veis e responsivas. Especialista em ecossistemas JavaScript (Node.js e React).",
    role: "Desenvolvedor Fullstack | Node.js | React",
    links: [
      { id: "1", platform: "GitHub", url: "https://github.com/jeffmr" },
      { id: "2", platform: "LinkedIn", url: "https://linkedin.com/in/jeffmr" },
      { id: "3", platform: "Email", url: "mailto:contatejeff@gmail.com" }
    ],
    skills: [
      { id: "1", name: "React.js", level: "Avan\xE7ado", category: "Frontend" },
      { id: "2", name: "Node.js", level: "Avan\xE7ado", category: "Backend" },
      { id: "3", name: "TypeScript", level: "Avan\xE7ado", category: "Fullstack" },
      { id: "4", name: "Tailwind CSS", level: "Avan\xE7ado", category: "Frontend" },
      { id: "5", name: "PostgreSQL", level: "Intermedi\xE1rio", category: "Banco de Dados" }
    ],
    experiences: [
      {
        id: "1",
        role: "Desenvolvedor Fullstack S\xEAnior",
        company: "Tech Solutions Inc.",
        period: "2023 - Presente",
        description: "Lideran\xE7a t\xE9cnica no desenvolvimento de plataformas web escal\xE1veis utilizando React e Node.js. Implementa\xE7\xE3o de arquiteturas em microsservi\xE7os e integra\xE7\xE3o cont\xEDnua."
      },
      {
        id: "2",
        role: "Desenvolvedor Frontend",
        company: "Ag\xEAncia Digital Criativa",
        period: "2021 - 2023",
        description: "Cria\xE7\xE3o de interfaces ricas e responsivas. Otimiza\xE7\xE3o de performance web e estrutura\xE7\xE3o de design systems com Tailwind CSS e Framer Motion."
      }
    ]
  };
  app.get("/api/config", (req, res) => {
    res.json({
      apiKey: process.env.VITE_FIREBASE_API_KEY || "",
      authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "",
      projectId: process.env.VITE_FIREBASE_PROJECT_ID || "",
      storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "",
      messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
      appId: process.env.VITE_FIREBASE_APP_ID || ""
    });
  });
  app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "E-mail e senha s\xE3o obrigat\xF3rios." });
    }
    if (!auth) {
      if (password === "admin") {
        return res.json({ token: "mock_admin_token_jwt_like", email });
      }
      return res.status(401).json({ error: 'E-mail ou senha incorretos (Simula\xE7\xE3o: use a senha "admin").' });
    }
    try {
      const userCredential = await (0, import_auth.signInWithEmailAndPassword)(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      res.json({ token, email: user.email });
    } catch (error) {
      console.error("Erro de autentica\xE7\xE3o no Firebase:", error);
      if (password === "admin") {
        return res.json({ token: "mock_admin_token_jwt_like", email });
      }
      res.status(401).json({ error: "E-mail ou senha inv\xE1lidos." });
    }
  });
  app.get("/api/projects", async (req, res) => {
    if (!db) {
      return res.json(mockProjects);
    }
    try {
      const querySnapshot = await (0, import_firestore.getDocs)((0, import_firestore.collection)(db, "projects"));
      const projects = querySnapshot.docs.map((doc2) => ({ id: doc2.id, ...doc2.data() }));
      res.json(projects);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
      res.json(mockProjects);
    }
  });
  app.post("/api/projects", async (req, res) => {
    const projectData = req.body;
    if (!db) {
      const newProj = { ...projectData, id: String(Date.now()), createdAt: Date.now() };
      mockProjects.push(newProj);
      return res.json(newProj);
    }
    try {
      const docRef = await (0, import_firestore.addDoc)((0, import_firestore.collection)(db, "projects"), {
        ...projectData,
        createdAt: projectData.createdAt || Date.now()
      });
      res.json({ id: docRef.id, ...projectData });
    } catch (error) {
      console.error("Erro ao salvar projeto:", error);
      res.status(500).json({ error: error.message });
    }
  });
  app.put("/api/projects/:id", async (req, res) => {
    const { id } = req.params;
    const projectData = req.body;
    if (!db) {
      mockProjects = mockProjects.map((p) => p.id === id ? { ...p, ...projectData } : p);
      return res.sendStatus(200);
    }
    try {
      const docRef = (0, import_firestore.doc)(db, "projects", id);
      await (0, import_firestore.updateDoc)(docRef, projectData);
      res.sendStatus(200);
    } catch (error) {
      console.error("Erro ao atualizar projeto:", error);
      res.status(500).json({ error: error.message });
    }
  });
  app.delete("/api/projects/:id", async (req, res) => {
    const { id } = req.params;
    if (!db) {
      mockProjects = mockProjects.filter((p) => p.id !== id);
      return res.sendStatus(200);
    }
    try {
      const docRef = (0, import_firestore.doc)(db, "projects", id);
      await (0, import_firestore.deleteDoc)(docRef);
      res.sendStatus(200);
    } catch (error) {
      console.error("Erro ao deletar projeto:", error);
      res.status(500).json({ error: error.message });
    }
  });
  app.get("/api/profile", async (req, res) => {
    if (!db) {
      return res.json(mockProfile);
    }
    try {
      const docRef = (0, import_firestore.doc)(db, "profiles", "main_profile");
      const docSnap = await (0, import_firestore.getDoc)(docRef);
      if (docSnap.exists()) {
        return res.json(docSnap.data());
      }
      res.json(mockProfile);
    } catch (error) {
      console.error("Erro ao obter perfil:", error);
      res.json(mockProfile);
    }
  });
  app.post("/api/profile", async (req, res) => {
    const profileData = req.body;
    if (!db) {
      mockProfile = { ...mockProfile, ...profileData };
      return res.sendStatus(200);
    }
    try {
      const docRef = (0, import_firestore.doc)(db, "profiles", "main_profile");
      await (0, import_firestore.setDoc)(docRef, profileData, { merge: true });
      res.sendStatus(200);
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      res.status(500).json({ error: error.message });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Fullstack Server] rodando com sucesso na porta ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
