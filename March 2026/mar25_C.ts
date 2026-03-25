/**
 * TYPES and INTERFACES in TypeScript
 * TypeScript provides two powerful ways to define the shape of data:
 *
 * 1. type (Type Alias)
 * 2. interface
 *
 * Both help define:
 * - Object structures
 * - Function signatures
 * - Arrays
 * - Custom reusable data models
 *
 * Their main goal is:
 * - Better type safety
 * - Cleaner code
 * - Strong IDE support
 * - Easier maintenance
 */

/**
 * TYPE ALIAS
 * A type alias creates a custom reusable name for any data type.
 *
 * It can represent:
 * - Objects
 * - Primitive types
 * - Functions
 * - Unions
 * - Intersections
 */

type UserProfile = {
	name: string;
	age: number;
};

const profileData: UserProfile = {
	name: 'Chirag',
	age: 25,
};

/**
 * TYPE ALIAS WITH UNION
 * Union allows one variable to accept multiple fixed values.
 */
type RequestStatus = 'success' | 'error' | 'loading';
let apiStatus: RequestStatus = 'success';

/**
 * Explanation:
 * apiStatus can only store:
 * - success
 * - error
 * - loading
 * Any other value gives TypeScript error.
 */

/**
 * TYPE ALIAS WITH FUNCTION
 * Type aliases can define function signatures.
 */

type AdditionFunction = (a: number, b: number) => number;
const addNumbers: AdditionFunction = (x, y) => x + y;

/**
 * Explanation:
 * addNumbers must:
 * - accept 2 numbers
 * - return number
 */

/**
 * TYPE ALIAS WITH INTERSECTION
 * Intersection combines multiple types into one using &
 */

type BasicPerson = {
	name: string;
};

type StaffMember = BasicPerson & {
	salary: number;
};

const employeeRecord: StaffMember = {
	name: 'Chirag',
	salary: 50000,
};

/**
 * Explanation:
 * StaffMember now contains:
 * - name
 * - salary
 */

/**
 * INTERFACE
 * Interface mainly defines object structure.
 * Commonly used in:
 * - APIs
 * - Classes
 * - Large project models
 */

interface Customer {
	name: string;
	age: number;
}

const customerData: Customer = {
	name: 'Chirag',
	age: 25,
};

/**
 * INTERFACE WITH OPTIONAL PROPERTY
 * Optional properties use ?
 */

interface Product {
	title: string;
	price?: number;
}

const productInfo: Product = {
	title: 'Laptop',
};

/**
 * Explanation:
 * price is optional.
 * title is required.
 */

/**
 * INTERFACE WITH FUNCTION
 * Interfaces can define function signatures too.
 */

interface MultiplyFunction {
	(a: number, b: number): number;
}

const multiplyNumbers: MultiplyFunction = (a, b) => a * b;

/**
 * INTERFACE EXTENDING ANOTHER INTERFACE
 * Interfaces support inheritance using extends.
 */

interface PersonDetails {
	name: string;
}

interface ManagerDetails extends PersonDetails {
	department: string;
}

const managerData: ManagerDetails = {
	name: 'Chirag',
	department: 'IT',
};

/**
 * Explanation:
 * ManagerDetails inherits:
 * - name
 * and adds:
 * - department
 */

/**
 * MAIN DIFFERENCE: TYPE vs INTERFACE
 * TYPE:
 * - Supports union
 * - Supports intersection
 * - More flexible for advanced combinations
 *
 * INTERFACE:
 * - Best for object contracts
 * - Supports extends
 * - Supports declaration merging
 */

/**
 * BEST PRACTICE
 * Use interface when defining objects in real applications.
 * Use type when:
 * - unions are needed
 * - intersections are needed
 * - advanced combinations are needed
 */
