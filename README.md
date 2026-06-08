👟 SneakPeak BackendThe backend server for the SneakPeak E-commerce application, built with Node.js, Express, and MongoDB.🚀 FeaturesAuthentication: Secure user registration and login using JWT (JSON Web Tokens).Product Management: Full CRUD operations for managing products.Order System: Endpoints to handle user orders and checkout.Admin Access: Role-based access control for administrative actions.🛠 Tech StackRuntime: Node.jsFramework: Express.jsDatabase: MongoDB (using Mongoose)Security: bcryptjs (password hashing), jsonwebtokenMiddleware: CORS, dotenv📦 Installation & SetupPrerequisitesNode.js (v14+)MongoDB (Local or Atlas)StepsClone the repository:Bashgit clone https://github.com/rahulraveendran371-dotcom/sneakpeak-backend.git
cd sneakpeak-backend
Install dependencies:Bashnpm install
Configure Environment Variables:Create a .env file in the root directory and add the following:Code snippetPORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Run the server:Bash# For development
npm run dev

# For production
npm start
🌐 API EndpointsMethodEndpointDescriptionPOST/api/auth/registerRegister a new userPOST/api/auth/loginLogin and get tokenGET/api/productsGet all productsPOST/api/ordersCreate a new orderGET/api/adminAdmin dashboard access