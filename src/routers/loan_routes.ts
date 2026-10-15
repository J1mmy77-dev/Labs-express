import { Router } from "express"
import { LoanController } from "../controllers/loan_controller";

const LoanRouter = Router();

LoanRouter.get('/usuarios', LoanController.getLoansUsers);

LoanRouter.post('/new-user', LoanController.addNewUser);

LoanRouter.get('/usuarios/:id', LoanController.getUserById);

LoanRouter.patch('/usuarios/:id', LoanController.updateUser);

LoanRouter.delete('/usuarios/:id', LoanController.deleteUser);

LoanRouter.get('/labs-areas', LoanController.getListLabs);

LoanRouter.post('/new-labs-areas', LoanController.postLabs);

LoanRouter.patch('/update-labs-areas/:id', LoanController.updateLabs);

LoanRouter.post('/new-group-labs', LoanController.newGroupLab);

LoanRouter.get('/list-groups-exists', LoanController.listGroupExists);

LoanRouter.patch('/update-group/:id', LoanController.listGroupExists);

LoanRouter.get('/search', LoanController.getLoansByFilter);

LoanRouter.get('/:id', LoanController.getLoanById);

LoanRouter.post('/', LoanController.CreateLoan);

LoanRouter.put('/:id/accept', LoanController.acceptLoanInventory);

export default LoanRouter