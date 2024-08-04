import { ImageProcessorAdapter } from '../../../core/adapters/image_processor.adapter';
import { RouterAdapter } from '../../../core/adapters/router.adapter';
import { StorageAdapter } from '../../../core/adapters/storage.adapter';
import { authMiddleware } from '../../../core/presenter/middlewares/auth.middleware';
import { FileModel } from '../../../core/presenter/models/file.model';
import { FileRepository } from '../data/repositories/file.repository';
import { ConvertImageUseCase } from '../data/usecases/convert_image.usecase';
import { GetAllFileReferencesUseCase } from '../data/usecases/get_all_file_references.usecase';
import { GetFileFromPathUseCase } from '../data/usecases/get_file_from_path.usecase';
import { GetFileReferenceUseCase } from '../data/usecases/get_file_reference.usecase';
import { GetPathFromIdUseCase } from '../data/usecases/get_path_from_id.usecase';
import { PathTransformUseCase } from '../data/usecases/path_transform.usecase';
import { SaveFileReferenceUseCase } from '../data/usecases/save_file_reference.usecase';
import { UploadFileUseCase } from '../data/usecases/upload_file.usecase';
import { GetAllFileReferencesController } from './controllers/get_all_file_references.controller';
import { GetFileByIdController } from './controllers/get_file_by_id.controller';
import { GetFileReferenceController } from './controllers/get_file_reference.controller';
import { UploadFileController } from './controllers/upload_file.controller';

const fileRoutes = new RouterAdapter();

const storageAdapter = new StorageAdapter();
const fileRepository = new FileRepository(storageAdapter, FileModel);

// Upload File
fileRoutes.post('/', authMiddleware(), async (req, res) => {
  const uploadFileUseCase = new UploadFileUseCase(fileRepository);
  const saveFileReferenceUseCase = new SaveFileReferenceUseCase(fileRepository);
  const pathTransformUseCase = new PathTransformUseCase();

  const imageProcessorAdapter = new ImageProcessorAdapter();
  const convertImageUseCase = new ConvertImageUseCase(imageProcessorAdapter);

  const uploadFileController = new UploadFileController({
    convertImageUseCase: convertImageUseCase,
    pathTransformUseCase: pathTransformUseCase,
    saveFileReferenceUseCase: saveFileReferenceUseCase,
    uploadFileUseCase: uploadFileUseCase,
  });
  return uploadFileController.handleRequest(req, res);
});

// Get file by id
fileRoutes.get('/:id', async (req, res) => {
  const getPathFromIdUseCase = new GetPathFromIdUseCase(fileRepository);
  const getFileFromPathUseCase = new GetFileFromPathUseCase(storageAdapter);
  const getFileByIdController = new GetFileByIdController(
    getPathFromIdUseCase,
    getFileFromPathUseCase,
  );
  return getFileByIdController.handleRequest(req, res);
});

// Get file reference by id
fileRoutes.get('/:id/reference', authMiddleware(), async (req, res) => {
  const getFileReferenceUseCase = new GetFileReferenceUseCase(fileRepository);
  const getFileReferenceController = new GetFileReferenceController(
    getFileReferenceUseCase,
  );
  return getFileReferenceController.handleRequest(req, res);
});

// Get all file references
fileRoutes.get('/', authMiddleware(), async (req, res) => {
  const getAllFileReferencesUseCase = new GetAllFileReferencesUseCase(
    fileRepository,
  );
  const getAllFileReferencesController = new GetAllFileReferencesController(
    getAllFileReferencesUseCase,
  );
  return getAllFileReferencesController.handleRequest(req, res);
});

export default fileRoutes;
