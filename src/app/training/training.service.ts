import {Exercise} from './exercise.model';

export class TrainingService {
    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touches Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'nurpees', name: 'Burpees', duration: 60, calories: 8 }
    ];
    
    getAvailableExercises() {
        return this.availableExercises.slice();
    }
}
