export function formatCourse(course) {
    const { name, instructor, fee } = course; 
    return `${name} by ${instructor} - Fee= Rs:${fee}`;
}