import { Router } from "express"
import { LoanController } from "../controllers/loan_controller";
import { validateLoanPayload } from "../middlewares/validateLoan.middleware";
import { validateLoanUsuarios } from "../middlewares/validateLoanUsuarios";
import { validateLoanNewLabs } from "../middlewares/validateLoanAreas.middleware";
import { validateLoanNewGroup } from "../middlewares/ValidateNewGropus";

const LoanRouter = Router();

LoanRouter.get('/usuarios', LoanController.getLoansUsers);

LoanRouter.post('/new-user', validateLoanUsuarios, LoanController.addNewUser);

LoanRouter.get('/usuarios/:id', LoanController.getUserById);

LoanRouter.patch('/usuarios/:id', LoanController.updateUser);

LoanRouter.delete('/usuarios/:id', LoanController.deleteUser);

LoanRouter.get('/labs-areas', LoanController.getListLabs);

LoanRouter.post('/new-labs-areas', validateLoanNewLabs, LoanController.postLabs);

LoanRouter.patch('/update-labs-areas/:id', LoanController.updateLabs);

LoanRouter.post('/new-group-labs', validateLoanNewGroup, LoanController.newGroupLab);

LoanRouter.get('/list-groups-exists', LoanController.listGroupExists);

LoanRouter.patch('/update-group/:id', LoanController.listGroupExists);

LoanRouter.get('/search', LoanController.getLoansByFilter);

LoanRouter.get('/:id', LoanController.getLoanById);

LoanRouter.post('/', validateLoanPayload, LoanController.CreateLoan);

LoanRouter.put('/:id/accept', LoanController.acceptLoanInventory);

export default LoanRouter